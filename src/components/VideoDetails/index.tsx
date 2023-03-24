import Cookies from "js-cookie";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import HomeVideosStore from "../../stores/homeVideoStore";
import {
  BaseVideoModel,
  HomeVideoModel,
} from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import { Icon } from "../EachPageDiv/styleComponent";
import FailureViewComponent from "../FailureViewComponent";
// import VideoDetailsStore, {
//   VideoDetailsType,
// } from "../../stores/videoDetailsStore";
import { VideoDescription } from "../HomeVideoCard/styleComponent";
import Loader from "../Loader";
import {
  ChannelDescContainer,
  ChannelDetails,
  ChannelName,
  Dislike,
  HorizontalLine,
  LikeDislikeSave,
  LikeDislikeSaveDiv,
  Profile,
  PublishedAt,
  Subscriber,
  VideoDescriptionDiv,
  VideoPlayerContainer,
  VideoTitle,
  ViewCount,
  ViewsLikeSaveDiv,
  ViewsPublishedDiv,
  Wrapper,
} from "./styleComponent";

interface Props {
  
  videoId: string | undefined;
  // videoDetailsStore: VideoDetailsStore;
}
interface InheritedProps extends Props {
  homeVideosStore: HomeVideosStore
}
const VideoDetails = inject(
  "videoDetailsStore",
  "homeVideosStore"
)(
  observer((props: Props) => {
    // const videoDetailsStore = props.videoDetailsStore as VideoDetailsStore;
    const {homeVideosStore} = props as InheritedProps;
    
    let data: HomeVideoModel;
   
    const handleLiked = () => {
      // console.log(data.toggleLiked)
      data.toggleLiked();
    };

    const handleDisliked = () => {
      data.toggleDisliked();
    };

    const handleSaved = () => {
      data.toggleSaved();
    };
    useEffect(() => {

     
      props.videoId && homeVideosStore.fetchVideoDetails(props.videoId);
      console.log(props.videoId)
    }, []);
    console.log(homeVideosStore.videoDetailsData)
    const renderVideoDetails = () => {
      
      
      data = homeVideosStore.videoDetailsData;
      console.log(data)
      // debugger
      return (
        <>
        {/* <div>akash</div> */}
          {/* <div>details Page</div> */}
           <Wrapper>
            <VideoPlayerContainer>
              <ReactPlayer
                className="video-player"
                light={data.thumbnailUrl}
                url={data.videoUrl}
                width="100%"
                height="100%"
              ></ReactPlayer>
            </VideoPlayerContainer>
            <VideoTitle>{data.title}</VideoTitle>
            <ViewsLikeSaveDiv>
              <ViewsPublishedDiv>
                <ViewCount>{data.viewCount} views .</ViewCount>
                <PublishedAt>{data.publishedAt}</PublishedAt>
              </ViewsPublishedDiv>
              <LikeDislikeSaveDiv>
                <LikeDislikeSave onClick={handleLiked} like={data.isLiked}>
                  <Icon className="fa-regular fa-thumbs-up" />
                  <div>Like</div>
                </LikeDislikeSave>
                <LikeDislikeSave
                  onClick={handleDisliked}
                  like={data.isDisliked}
                >
                  <Icon className="fa-regular fa-thumbs-down"/>
                  <div>Dislike</div>
                </LikeDislikeSave>
                <LikeDislikeSave onClick={handleSaved} like={data.isSaved}>
                  <Icon className="fa-solid fa-list-check"/>
                  <div>Save</div>
                </LikeDislikeSave>
              </LikeDislikeSaveDiv>
            </ViewsLikeSaveDiv>
            <HorizontalLine />
            <ChannelDescContainer> 
              <Profile src={data.channel?.profileImageUrl}/>
              <ChannelDetails>
                <ChannelName>{data.channel?.name}</ChannelName>
                <Subscriber>{data.channel?.subscriberCount} subscribers</Subscriber>
                <VideoDescriptionDiv>{data.description}</VideoDescriptionDiv>
              </ChannelDetails>
              {/* CHannel Desc */}
            </ChannelDescContainer>
          </Wrapper> 
        </>
      );
    };

    const renderLoader = () => {
      // getVideoList();
      // console.log("Loading Here");
      return <div>Loading...</div>;
    };

    

    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusVideoDetail;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
         return <Loader />
          
          case ApiStatus.SUCESS:
            // {console.log("Successs")}
            return renderVideoDetails();
          case ApiStatus.FAILURE:
            return <FailureViewComponent />  
            
            default:
            return <div>Video Details</div>;
           
      }
    };
    return (
      <>
      {/* <div>akash1</div> */}
       { renderThings()}
        {/* <div>akash</div> */}
        {/* {console.log("End")} */}
        {/* {homeVideosStore.apiStatusVideoDetail ? renderLoader() : renderVideoDetails()} */}
      </>
    );
  })
);

export default VideoDetails;
