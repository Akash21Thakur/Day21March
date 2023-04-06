import Cookies from "js-cookie";
import { action, computed, makeObservable, observable, toJS } from "mobx";
import { threadId } from "worker_threads";
import {
  GAMING_VIDEOS_API_URL,
  TRENDING_VIDEOS_API_URL,
  HOME_VIDEOS_API_URL,
} from "../../constants/ApiUrlConstants";
import { GamingVideosListServiceApi } from "../../service/GamingVideosListService/index.api";
import { HomeVideosListServiceApi } from "../../service/homeVideosListService/index.api";
import { HomeVideosListServiceFixture } from "../../service/homeVideosListService/index.fixture";
import { TrendingVideosListServiceApi } from "../../service/TrendingVideosListService/index.api";
import { TrendingVideosListServiceFixture } from "../../service/TrendingVideosListService/index.fixture";
import { VideoDetailsPageServiceApi } from "../../service/VideoDetailsPageService/index.api";
import { VideoDetailsPageServiceFixture } from "../../service/VideoDetailsPageService/index.fixture";

import { BaseVideoModel, HomeVideoModel } from "../model/homeVideoModel";
// import HomeVideoModel from "../model/homeVideoModel";
import { ApiStatus, FetchedHomeDetails } from "../types";
// import { VideoDetailsType } from "../videoDetailsStore";

class HomeVideosStore {
  homeVideosList!: HomeVideoModel[];
  apiStatusHomeVideos: ApiStatus;
  trendingVideosList!: HomeVideoModel[];
  apiStatusTrendingVideos: ApiStatus;
  gamingVideosList!: BaseVideoModel[];
  apiStatusGamingVideos: ApiStatus;
  searchedText: string = "";
  filteredList!: HomeVideoModel[];
  isLoading: boolean = true;
  videoList!: (BaseVideoModel | HomeVideoModel)[];
  showBanner: boolean = true;
  videoDetailsData!: HomeVideoModel;
  isLoadingVideoDetails: boolean = true;
  finalFetchedList: HomeVideoModel[] = [];
  apiStatusVideoDetail: ApiStatus;
  showDrawerList: boolean = false;
  urlHistory: string = "";

  // savedVideoList: HomeVideoModel[] = [];

  constructor() {
    this.apiStatusVideoDetail = ApiStatus.INITIAL;
    this.apiStatusHomeVideos = ApiStatus.INITIAL;
    this.apiStatusGamingVideos = ApiStatus.INITIAL;
    this.apiStatusTrendingVideos = ApiStatus.INITIAL;
    makeObservable(this, {
      // homeVideosList: observable,
      // trendingVideosList: observable,
      // gamingVideosList: observable,
      // isLoading: observable,
      searchedText: observable,
      homeVideoListFn: computed,
      showBanner: observable,
      removeBanner: action,
      isLoadingVideoDetails: observable,
      apiStatusVideoDetail: observable,
      apiStatusGamingVideos: observable,
      apiStatusHomeVideos: observable,
      apiStatusTrendingVideos: observable,
      showDrawerList: observable,
      toggleDrawerView: action,
      // finalFetchedList:observable,
      // savedVideosListFn: computed,
      updateSearchedText: action,
      fetchHomeVideoList: action,
      completeVideoList: computed,
      savedVideoList: computed,
      fetchVideoDetails: action,
      // urlHistory: observable,
      // setUrlHistory: action
      // videoList: observable
    });
    // console.log("akash");
    // this.fetchHomeVideoList();
    // this.fetchTrendingVideoList();
    // this.fetchGamingVideoList();

    // console.log(this.videoList);
    // this.filteredList=this.homeVideosList
  }

  setUrlHistory(url: string) {
    this.urlHistory = url;
  }

  toggleDrawerView = () => {
    this.showDrawerList = !this.showDrawerList;
  };

  removeBanner = () => {
    this.showBanner = false;
  };

  updateSearchedText(text: string) {
    this.searchedText = text;
  }

  fetchGamingVideoList = async () => {
    if (this.apiStatusGamingVideos === ApiStatus.SUCESS) return;

    // this.isLoading = true;
    this.apiStatusGamingVideos = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");
    // console.log(token);
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    try {
      const obj = new GamingVideosListServiceApi();
      const response = await obj.getGamingVideosList();
      const data = await response.json();
      if (response.ok) {
        const temp = data.videos;

        this.gamingVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
        );

        this.apiStatusGamingVideos = ApiStatus.SUCESS;
      } else {
        console.log(data.error_msg);
      }
    } catch (err) {
      this.apiStatusGamingVideos = ApiStatus.FAILURE;
      console.log(err);
    }
  };

  fetchTrendingVideoList = async () => {
    if (this.apiStatusTrendingVideos === ApiStatus.SUCESS) return;

    this.apiStatusTrendingVideos = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");

    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    try {
      // const obj =new TrendingVideosListServiceFixture();
      const obj =new TrendingVideosListServiceApi();
      const response = await obj.getTrendingVideosListService();
      const data = await response.json();
      if (response.ok) {
        this.trendingVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
        );

        this.apiStatusTrendingVideos = ApiStatus.SUCESS;
      } else {
        this.apiStatusTrendingVideos = ApiStatus.FAILURE;
        console.log(data.error_msg);
      }
    } catch (err) {
      this.apiStatusTrendingVideos = ApiStatus.FAILURE;
    }
  };

  fetchHomeVideoList = async () => {
    // this.isLoading = true;
    if (this.apiStatusHomeVideos === ApiStatus.SUCESS) return;

    this.apiStatusHomeVideos = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");
    // console.log(token);
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      // const obj=new HomeVideosListServiceFixture();
      const obj=new HomeVideosListServiceApi();
      const response = await obj.getHomeVideosList();
      const data = await response.json();
      if (response.ok) {
        this.homeVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
        );
        this.apiStatusHomeVideos = ApiStatus.SUCESS;
      } else {
        // this.homeVideosList = [];
        this.apiStatusHomeVideos = ApiStatus.FAILURE;
        console.log(data.error_msg);
      }
    } catch (err) {
      this.apiStatusHomeVideos = ApiStatus.FAILURE;
      // console.error(err);
    }
  };

  fetchVideoDetails = async (props: string) => {
    this.apiStatusVideoDetail = ApiStatus.LOADING;
  
    console.log(props);
   
    let flag = false;
   
    // let each: HomeVideoModel;
    for (let each of this.finalFetchedList) {
      if (each.id === props) {
        // detailedData=each;
        this.videoDetailsData = each;
        flag = true;
        break;
      }
    }

    // this.finalFetchedList &&
    //   this.finalFetchedList.find((each: HomeVideoModel) => each.id === props);
    if (flag) {
      // this.videoDetailsData=detailedData;
      this.apiStatusVideoDetail = ApiStatus.SUCESS;
      return;
    } else {
      const token = Cookies.get("jwt_token");
      // console.log(token);
      const option = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      };
      try {
        const url = `https://apis.ccbp.in/videos/${props}`;
        const obj = new VideoDetailsPageServiceApi();
        // const obj = new VideoDetailsPageServiceFixture();
        const response = await obj.getVideoDetailsPageService(url);
        const data = await response.json();
        if (response.ok) {
          // console.log(data);
          this.videoDetailsData = new HomeVideoModel(data.video_details);
          this.finalFetchedList &&
            this.finalFetchedList.push(this.videoDetailsData);
          this.apiStatusVideoDetail = ApiStatus.SUCESS;
          // this.videoDetailsData = updateValues(data.video_details);
          // console.log(this.videoDetailsData);
          // this.isLoadingVideoDetails = false;
          // const temp = data.videos;
          // console.log(this.videoDetailsData);

          // new HomeVideoModel(data.videos)
          // console.log(this.homeVideosList);
        } else {
          // this.homeVideosList = [];
          console.error(data.error_msg);
        }
      } catch (err) {
        this.apiStatusVideoDetail = ApiStatus.FAILURE;
        // console.error(err);
      }
    }
  };
  //  this.finalFetchedList.find((each: HomeVideoModel) => {
  //   if(each.id===props){
  //     detailedData=each;
  //     flag=true;
  //     // break;
  //   }
  //  })
  // let curObj : (HomeVideoModel | BaseVideoModel)= this.getVideoOject(props);
  // // console.log(curObj);
  // // debugger
  // const updateValues = (data: any): VideoDetailsType => {
  //   // console.log(curObj);
  //   let finalData: VideoDetailsType = {
  //     vidObj: curObj,
  //     videoUrl: data.video_url,
  //     description: data.description,
  //     publishedAt: data.published_at,
  //   };

  //   return finalData;
  // }
  // const token = Cookies.get("jwt_token");
  // // console.log(token);
  // const option = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "GET",
  // };
  // try {
  //   const url = `https://apis.ccbp.in/videos/${props}`;
  //   const response = await fetch(url, option);
  //   const data = await response.json();
  //   if (response.ok) {
  //     // console.log(data);

  //     this.videoDetailsData = updateValues(data.video_details);
  //     console.log(this.videoDetailsData);
  //     this.isLoadingVideoDetails = false;
  //     // const temp = data.videos;
  //     // console.log(this.videoDetailsData);

  //     // new HomeVideoModel(data.videos)
  //     // console.log(this.homeVideosList);
  //   } else {
  //     // this.homeVideosList = [];
  //     console.error(data.error_msg);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  // }

  get completeVideoList() {
    // this.videoList && this.videoList.push(...this.homeVideosList,...this.trendingVideosList,...this.gamingVideosList);
    this.videoList && this.videoList.push(...this.homeVideosList);
    this.videoList && console.log(this.videoList.length);
    return this.videoList;
  }

  get homeVideoListFn(): HomeVideoModel[] {
    // console.log(this.homeVideosList);
    // var filteredList=[];
    this.filteredList =
      this.homeVideosList &&
      this.homeVideosList.filter((eachItem: HomeVideoModel) =>
        eachItem.title.toLowerCase().includes(this.searchedText.toLowerCase())
      );
    return this.filteredList;
  }

  get savedVideoList(): (BaseVideoModel | HomeVideoModel)[] {
    // console.log("here");
    // this.videoList =
    //   this.homeVideosList
    //   &&
    //   this.homeVideosList.filter((eachItem: HomeVideoModel) => {
    //     console.log(eachItem.isSaved);
    //     return eachItem.isSaved && eachItem;
    //   });
    //   console.log(this.videoList);
    // this.homeVideosList &&
    //   this.homeVideosList.forEach((each: HomeVideoModel) => {
    //     if (each.isSaved) this.videoList.push(each);
    //   });

    // this.trendingVideosList &&
    //   this.trendingVideosList.forEach((each: HomeVideoModel) => {
    //     if (each.isSaved) this.videoList.push(each);
    //   });

    // this.gamingVideosList &&
    //   this.gamingVideosList.forEach((each: BaseVideoModel) => {
    //     if (each.isSaved) this.videoList.push(each);
    //   });
    // return this.videoList;

    return this.finalFetchedList.filter((each: HomeVideoModel) => {
      if (each.isSaved) return each;
    });
  }
  // let curObj: HomeVideoModel | BaseVideoModel = (tempList &&
  //   tempList.find((x: HomeVideoModel | BaseVideoModel) => x.id === props))
  getVideoOject(id: string): BaseVideoModel | HomeVideoModel {
    let obj: any;

    // this.homeVideosList && this.homeVideosList.find((x: HomeVideoModel | BaseVideoModel) => x.id === id)
    obj =
      this.homeVideosList &&
      this.homeVideosList.forEach((each: HomeVideoModel) => {
        if (each.id === id) return each;
      });

    // obj= this.trendingVideosList && this.trendingVideosList.forEach((each : HomeVideoModel) => {
    //   if(each.id===id)  return each;
    // })

    // obj=this.gamingVideosList && this.gamingVideosList.forEach((each : BaseVideoModel) => {
    //   if(each.id===id)  return each;
    // })

    // return
    return obj;
    // this.trendingVideosList && this.trendingVideosList.forEach((each : HomeVideoModel) =>{
    //   if(each.isSaved)
    //     this.videoList.push(each);
    // })

    // this.gamingVideosList && this.gamingVideosList.forEach((each : BaseVideoModel) =>{
    //   if(each.isSaved)
    //     this.videoList.push(each);
    // })
  }
}

export default HomeVideosStore;
