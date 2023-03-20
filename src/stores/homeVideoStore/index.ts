import Cookies from "js-cookie";
import { action, computed, makeObservable, observable } from "mobx";
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
  isLoading!: boolean;

  constructor() {
    makeObservable(this, {
      homeVideosList: observable,
      trendingVideosList: observable,
      gamingVideosList: observable,
      isLoading: observable,
      searchedText: observable,
      homeVideoListFn: computed,
      savedVideosListFn: computed,
      updateSearchedText: action,
      fetchHomeVideoList: action,
    });

    this.fetchHomeVideoList();
    this.fetchTrendingVideoList();
    this.fetchGamingVideoList();
    // this.filteredList=this.homeVideosList
  }

  updateSearchedText(text: string) {
    this.searchedText = text;
  }

  fetchGamingVideoList = async () => {
    this.isLoading = true;
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
        this.isLoading = false;
        const temp = data.videos;
        // console.log(temp);
        this.gamingVideosList = data.videos.map(
          (each: BaseFetchedVideoDetails) => new BaseVideoModel(each)
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

  fetchTrendingVideoList = async () => {
    this.isLoading = true;
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
    this.isLoading = true;
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

  get savedVideosListFn  ()  {
    return this.filteredList;
  }
}

export default HomeVideosStore;
