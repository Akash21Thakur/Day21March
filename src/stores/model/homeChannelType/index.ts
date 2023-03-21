import { FetchedChannelType } from "../../types";

export class ChannelType {
  name: string;
  profileImageUrl: string;

  constructor(data: FetchedChannelType) {
    this.name = data.name;
    this.profileImageUrl = data.profile_image_url;
  }
}

export class VideoDetailChannelType {
  name: string;
  profileImageUrl: string;
  subscriberCount: string ;

  constructor(data: FetchedChannelType) {
    //  super(data);
    this.name = data.name;
    this.profileImageUrl = data.profile_image_url;
    this.subscriberCount = data.subscriber_count ? data.subscriber_count : '';
  }
}

// export  ChannelType;
