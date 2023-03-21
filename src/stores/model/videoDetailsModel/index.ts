import { FetchedVideoDetails } from "../../types";

import { VideoDetailChannelType } from "../homeChannelType";

class VideoDetailsModel {
  id: string = "";
  channel?: VideoDetailChannelType;
  publishedAt?: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string;
  videoUrl: string;
  description: string;

  constructor(datas: FetchedVideoDetails) {
    // console.log(datas);
    this.id = datas.id;
    this.channel =datas.channel && new VideoDetailChannelType(datas.channel);
    this.publishedAt = datas.published_at;
    this.thumbnailUrl = datas.thumbnail_url;
    this.title = datas.title;
    this.viewCount = datas.view_count;
    this.videoUrl = datas.video_url;
    this.description = datas.description;
    this.thumbnailUrl = datas.thumbnail_url;
  }
}

export { VideoDetailsModel };
