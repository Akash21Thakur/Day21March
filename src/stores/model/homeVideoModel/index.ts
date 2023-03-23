// import { FetchedHomeDetails } from "../../homeVideoStore";
import { action, makeObservable, observable } from "mobx";
import { BaseFetchedVideoDetails, FetchedHomeDetails } from "../../types";
import { ChannelType, VideoDetailChannelType } from "../homeChannelType";

// export interface
 export class BaseVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: string;
  isSaved: boolean=false;
  isLiked: boolean=false;
  isDisliked: boolean=false;

  constructor(datas: BaseFetchedVideoDetails) {
    // console.log(datas.channel);
    this.id = datas.id;
    //    this.channel.name

    this.thumbnailUrl = datas.thumbnail_url;
    this.title = datas.title;
    this.viewCount = datas.view_count;
    // this.isSaved = false;

    makeObservable((this),{
      isSaved: observable,
      isLiked: observable,
      isDisliked: observable,
      toggleDisliked:action,
      toggleLiked: action,
      toggleSaved: action
    })
  }

  toggleSaved(){
    console.log(this.isSaved);
    this.isSaved = ! this.isSaved;
  }

  toggleLiked(){
    console.log("liked")
     if(this.isDisliked)  
        this.isDisliked=false;
     this.isLiked=!this.isLiked;   
  }

  toggleDisliked(){
    console.log("disliked")
    if(this.isLiked)  
       this.isLiked=false;
    this.isDisliked=!this.isDisliked;   
 }
} 

export class HomeVideoModel extends BaseVideoModel {
  channel?: VideoDetailChannelType;
  publishedAt: string;
  description: string;
  videoUrl: string;

  constructor(datas: FetchedHomeDetails) {
    super(datas);
    // console.log(datas.channel);

    //    this.channel.name
    this.channel = datas.channel && new VideoDetailChannelType(datas.channel) ;

    this.publishedAt = datas.published_at ?  datas.published_at : "";
    this.description=datas.description ? datas.description : '';
    this.videoUrl = datas.video_url ? datas.video_url : '';
  }
}

// export default HomeVideoModel;
