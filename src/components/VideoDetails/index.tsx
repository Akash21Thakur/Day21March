import Cookies from "js-cookie";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import VideoDetailsStore from "../../stores/videoDetailsStore";
import { VideoDescription } from "../HomeVideoCard/styleComponent";
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
  videoId: string;
  videoDetailsStore: VideoDetailsStore;
}

const VideoDetails = inject("videoDetailsStore")(
  observer((props: any) => {
    const videoDetailsStore = props.videoDetailsStore as VideoDetailsStore;
    // console.log(toJS(props.videoDetailsStore.videoDetailsData));
    let data : HomeVideoModel;
    // let color1: boolean;
    // videoDetailsStore.id=props.videoId;
    // videoDetailsStore.demoComputed;
    // console.log(videoDetailsStore);
  const handleLiked = () => {
    // console.log(data.toggleLiked)
       data.toggleLiked();
  }

  const handleDisliked = () => {
       data.toggleDisliked();
  }

  const handleSaved = () => {
       data.toggleSaved();
  }
    useEffect(() => {
      // console.log(videoDetailsStore.getDe)
      videoDetailsStore.getDetails(props.videoId);
    }, []);
    const renderVideoDetails = () => {
      // console.log(videoDetailsStore);
      // console.log(videoDetailsStore.videoDetailsData);
      // console.log(videoState.videoList.video_details);
      // console.log(videoDetailsStore.videoDetailsData);
      console.log("akash123")
      data = videoDetailsStore.videoDetailsData;
      return (
        <>
        {/* <div>details Page</div> */}
          <Wrapper>
            <VideoPlayerContainer>

            <ReactPlayer
              className="video-player"
              light={data.thumbnailUrl}
              url={data.videoUrl}
              width='100%'
              height='100%'
              
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
                  <i className="fa-regular fa-thumbs-up"></i>
                  <div>Like</div>
                </LikeDislikeSave >
                <LikeDislikeSave onClick={handleDisliked} like={data.isDisliked}>
                  <i className="fa-regular fa-thumbs-down"></i>
                  <div>Dislike</div>
                </LikeDislikeSave>
                <LikeDislikeSave onClick={handleSaved} like={data.isSaved}>
                  <i className="fa-solid fa-list-check"></i>
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
            </ChannelDescContainer>
          </Wrapper>
        </>
      );
    };

    const renderLoader = () => {
      // getVideoList();
      console.log('Loading Here')
      return <div>Loading...</div>;
    };

    return (
      <>
        {/* <div>akash</div> */}
        {console.log(videoDetailsStore.isLoading)}
        {videoDetailsStore.isLoading ? renderLoader() : renderVideoDetails()}
      </>
    );
  })
);

export default VideoDetails;
