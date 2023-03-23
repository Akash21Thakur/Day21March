import { AnyARecord } from "dns";
import Cookies from "js-cookie";
import { action, computed, makeObservable, observable, toJS } from "mobx";
import { homeVideosStore } from "..";
import { BaseVideoModel, HomeVideoModel } from "../model/homeVideoModel";
import { VideoDetailsModel } from "../model/videoDetailsModel";
// import {homeVideosStore} from '../homeVideoStore';

export interface VideoDetailsType {
  vidObj: HomeVideoModel | BaseVideoModel;
  videoUrl: string;
  description: string;
  publishedAt: string;
}

class VideoDetailsStore {
  isLoading: boolean = true;
  // id: string = "";
  // isLiked: boolean
  videoDetailsData!: VideoDetailsType;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      videoDetailsData: observable,
      getDetails: action,
      // demoComputed: computed
    });
    // this.getDetails();
  }

  getDetails = async (props: string) => {
    // console.log(props);
    this.isLoading = true;
    // console.log('here1');
    // const tempList: (HomeVideoModel | BaseVideoModel)[] =
    //   homeVideosStore.savedVideoList && toJS(homeVideosStore.savedVideoList);
    //   console.log(tempList)
    //   debugger

    // let curObj: HomeVideoModel | BaseVideoModel = (tempList &&
    //   tempList.find((x: HomeVideoModel | BaseVideoModel) => x.id === props))!;
    const updateValues = (data: any): VideoDetailsType => {
     
      let curObj = homeVideosStore.getVideoOject(props) as (HomeVideoModel | BaseVideoModel);
      console.log(curObj);
      let finalData: VideoDetailsType = {
        vidObj: curObj,
        videoUrl: data.video_url,
        description: data.description,
        publishedAt: data.published_at,
      };

      return finalData;
    };
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
        // updateValues(data.video_details);
        this.videoDetailsData = updateValues(data.video_details);
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
  };
}

export default VideoDetailsStore;
