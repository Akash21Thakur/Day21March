import Cookies from "js-cookie";
import { action, computed, makeObservable, observable } from "mobx";
import { HomeVideoModel } from "../model/homeVideoModel";
import { VideoDetailsModel } from "../model/videoDetailsModel";

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
        this.videoDetailsData = new HomeVideoModel(data.video_details);
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
