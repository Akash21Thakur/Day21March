import Cookies from "js-cookie";
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
  LikeDislikeSave,
  LikeDislikeSaveDiv,
  Profile,
  PublishedAt,
  Subscriber,
  VideoDescriptionDiv,
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
    let data : HomeVideoModel;
    // videoDetailsStore.id=props.videoId;
    // videoDetailsStore.demoComputed;
    // console.log(videoDetailsStore);
  const handleLiked = () => {
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
      console.log(videoDetailsStore.videoDetailsData);
      // console.log(videoState.videoList.video_details);
      // console.log(videoDetailsStore.videoDetailsData);
      data = videoDetailsStore.videoDetailsData;
      return (
        <>
          <Wrapper>
            <ReactPlayer
              className="video-player"
              light={data.thumbnailUrl}
              url={data.videoUrl}
              
            ></ReactPlayer>
            <VideoTitle>{data.title}</VideoTitle>
            <ViewsLikeSaveDiv>
              <ViewsPublishedDiv>
                <ViewCount>{data.viewCount} views .</ViewCount>
                <PublishedAt>{data.publishedAt}</PublishedAt>
              </ViewsPublishedDiv>
              <LikeDislikeSaveDiv>
                <LikeDislikeSave onClick={handleLiked}>
                  <i className="fa-regular fa-thumbs-up"></i>
                  <div>Like</div>
                </LikeDislikeSave >
                <LikeDislikeSave onClick={handleDisliked}>
                  <i className="fa-regular fa-thumbs-down"></i>
                  <div>Dislike</div>
                </LikeDislikeSave>
                <LikeDislikeSave onClick={handleSaved}>
                  <i className="fa-solid fa-list-check"></i>
                  <div>Save</div>
                </LikeDislikeSave>
              </LikeDislikeSaveDiv>
            </ViewsLikeSaveDiv>
            <div className="hr-line"></div>
            <ChannelDescContainer>
              <Profile src={data.channel.profileImageUrl}/>
              <ChannelDetails>
                <ChannelName>{data.channel.name}</ChannelName>
                <Subscriber>{data.channel.subscriberCount} subscribers</Subscriber>
                <VideoDescriptionDiv>{data.description}</VideoDescriptionDiv>
              </ChannelDetails>
            </ChannelDescContainer>
          </Wrapper>
        </>
      );
    };

    const renderLoader = () => {
      // getVideoList();
      return <div>Loading...</div>;
    };

    return (
      <>
        {/* <div>akash</div> */}
        {/* {console.log(videoDetailsStore.isLoading)} */}
        {videoDetailsStore.isLoading ? renderLoader() : renderVideoDetails()}
      </>
    );
  })
);

export default VideoDetails;
