export interface FetchedChannelType { 
    name: string;
    profile_image_url: string;
    subscriber_count?: string;
  }

  export interface BaseFetchedVideoDetails{
    id: string;
    thumbnail_url: string;
    title: string;
    view_count: string;
    isSaved? : boolean;
  }
  
  export interface FetchedHomeDetails extends BaseFetchedVideoDetails {
    
    channel: FetchedChannelType ;
    published_at: string;
    description?: string;
    video_url?: string;
    
  }
  
  export interface FetchedVideoDetails extends FetchedHomeDetails {
    description: string;
    video_url: string;
    // thumbnail_url: string;
  }

  interface ChannelType {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  }
  
  interface VideoType {
    channel: ChannelType;
    id: string;
    description: string;
  
    published_at: string;
    thumbnail_url: string;
    title: string;
    video_url: string;
    view_count: string;
  }
  
  interface VideoDetailsType {
    isLoading?: boolean;
  
    video_details: VideoType;
  }