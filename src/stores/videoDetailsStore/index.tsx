import { AnyARecord } from "dns";
import Cookies from "js-cookie";
import { action, computed, makeObservable, observable, toJS } from "mobx";
import { homeVideosStore } from "..";
import { HomeVideoModel } from "../model/homeVideoModel";
import { VideoDetailsModel } from "../model/videoDetailsModel";
// import {homeVideosStore} from '../homeVideoStore'; 

class VideoDetailsStore {
  isLoading: boolean = true;
  // id: string = "";
  // isLiked: boolean
  videoDetailsData!: HomeVideoModel;

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
    const tempList: HomeVideoModel[] =homeVideosStore.savedVideoList && toJS(homeVideosStore.savedVideoList);
    
    let curObj : HomeVideoModel= (tempList && tempList.find((x: HomeVideoModel) => x.id === props))!
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
        this.videoDetailsData = curObj as HomeVideoModel;
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
