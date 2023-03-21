import Cookies from "js-cookie";
import { action, computed, makeObservable, observable, toJS } from "mobx";
import {
  GAMING_VIDEOS_API_URL,
  HOME_VIDEOS_API_URL,
  LOGIN_API_URL,
  TRENDING_VIDEOS_API_URL,
} from "../../constants/api_url";
import { BaseVideoModel, HomeVideoModel } from "../model/homeVideoModel";
// import HomeVideoModel from "../model/homeVideoModel";
import { BaseFetchedVideoDetails, FetchedHomeDetails } from "../types";

class HomeVideosStore {
  homeVideosList!: HomeVideoModel[];
  trendingVideosList!: HomeVideoModel[];
  gamingVideosList!: BaseVideoModel[];
  searchedText: string = "";
  filteredList!: HomeVideoModel[];
  isLoading: boolean = true;
  videoList!: HomeVideoModel[];
  // savedVideoList: HomeVideoModel[] = [];

  constructor() {
    makeObservable(this, {
      homeVideosList: observable,
      trendingVideosList: observable,
      gamingVideosList: observable,
      isLoading: observable,
      searchedText: observable,
      homeVideoListFn: computed,
      // savedVideosListFn: computed,
      updateSearchedText: action,
      fetchHomeVideoList: action,
      completeVideoList: computed,
      savedVideoList: computed,
      // videoList: observable
    });
    // console.log("akash");
    // this.fetchHomeVideoList();
    // this.fetchTrendingVideoList();
    this.fetchGamingVideoList();

    // console.log(this.videoList);
    // this.filteredList=this.homeVideosList
  }

  updateSearchedText(text: string) {
    this.searchedText = text;
  }

  fetchGamingVideoList = async () => {
    // this.isLoading = true;
    const token = Cookies.get("jwt_token");
    // console.log(token);
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const response = await fetch(GAMING_VIDEOS_API_URL, option);
      const data = await response.json();
      if (response.ok) {
        const temp = data.videos;
        // console.log(temp);
        this.gamingVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
          );
          console.log(toJS(this.gamingVideosList));
          this.isLoading = false;
        // new HomeVideoModel(data.videos)
      } else {
        // this.homeVideosList = [];
        console.log(data.error_msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchTrendingVideoList = async () => {
    // this.isLoading = true;
    const token = Cookies.get("jwt_token");
    // console.log(token);
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const response = await fetch(TRENDING_VIDEOS_API_URL, option);
      const data = await response.json();
      if (response.ok) {
        this.isLoading = false;
        const temp = data.videos;
        // console.log(temp);
        this.trendingVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
        );
        // new HomeVideoModel(data.videos)
        // console.log(this.homeVideosList);
      } else {
        // this.homeVideosList = [];
        console.log(data.error_msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchHomeVideoList = async () => {
    // this.isLoading = true;
    const token = Cookies.get("jwt_token");
    // console.log(token);
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const response = await fetch(HOME_VIDEOS_API_URL, option);
      const data = await response.json();
      if (response.ok) {
        this.isLoading = false;
        const temp = data.videos;
        // console.log(temp);
        this.homeVideosList = data.videos.map(
          (each: FetchedHomeDetails) => new HomeVideoModel(each)
        );
        // new HomeVideoModel(data.videos)
        // console.log(this.homeVideosList);
      } else {
        // this.homeVideosList = [];
        console.log(data.error_msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchVideoDetails = async (props: string) => {
    // console.log(props);
    // this.isLoading = true;   
    // console.log('here1');
    // const tempList[] =homeVideosStore.savedVideoList && toJS(homeVideosStore.savedVideoList);
    
    let curObj : HomeVideoModel= (this.homeVideosList && this.homeVideosList.find((x: HomeVideoModel) => x.id === props))!
    const updateValues = (data: any) => {
      console.log(curObj);
      curObj.videoUrl=data.video_url;
      curObj.description=data.description;
      //  curObj.channel.subscriberCount=data.channel.subscriber_count;

    }
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
      const response = await fetch(url, option);
      const data = await response.json();
      if (response.ok) { 
        // console.log(data);
        updateValues(data.video_details);
        // this.videoDetailsData = curObj as HomeVideoModel;
        this.isLoading = false;
        // const temp = data.videos;
        // console.log(this.videoDetailsData);

        // new HomeVideoModel(data.videos)
        // console.log(this.homeVideosList);
      } else {
        // this.homeVideosList = [];
        console.error(data.error_msg);
      } 
    } catch (err) {
      console.error(err);
    }
  }

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

  get savedVideoList (): HomeVideoModel[] {
    // console.log("here");
    this.videoList =
      this.homeVideosList &&
      this.homeVideosList.filter((eachItem: HomeVideoModel) => {
        console.log(eachItem.isSaved);
        return eachItem.isSaved && eachItem;
      });
    return this.videoList;
  }
}

export default HomeVideosStore;
