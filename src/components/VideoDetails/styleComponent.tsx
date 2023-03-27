import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;

  /* .player-wrapper { */
  /* position: relative;
  padding-top: 56.25%; 
/* } */

  .video-player {
    width: 100%;
    /* top: 0;
  left: 0; */
  }
  */ .hr-line {
    width: 100%;
    height: 3px;
    margin-top: 15px;
    background-color: black;
  }
`;

// export const VideoContainer= styled.div`
//     width:100% !important;
//     height:300px !important;

// `

export const HorizontalLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #6d7886;;
  margin-top: 20px;
`;

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const VideoTitle = styled.div`
  margin-top: 15px;
  font-weight: 500;
`;

export const ViewsLikeSaveDiv = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 576px) {
    margin-top: 6px;
    flex-wrap: wrap;
  }
`;
export const ViewsPublishedDiv = styled.div`
  display: flex;
  margin-top: 8px;
  color: #6d7886;
`;

export const ViewCount = styled.div``;

export const PublishedAt = styled.div`
  padding-left: 5px;
`;
export const LikeDislikeSaveDiv = styled.div`
  display: flex;

  @media (max-width: 576px) {
    margin-top: 6px;
    width: 100%;
    justify-content: space-between;
  }
`;

interface Props {
  like: boolean | null;
}

export const LikeDislikeSave = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  /* font-weight: 500; */
  font-weight: ${(props: Props) => (props.like ? 500 : 300)};
  color: ${(props: Props) =>
    props.like ? "blue" : ({ theme }) => theme.color};
  i {
    padding-right: 5px;
    color: ${(props: Props) =>
      props.like ? "blue" : ({ theme }) => theme.color};
  }
  /* color: ${(props) => props.color} */
`;
export const Dislike = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  font-weight: ${(props: Props) => (props.like === false ? 500 : 300)};
  color: ${(props: Props) =>
    props.like === false ? "blue" : ({ theme }) => theme.color};
  i {
    padding-right: 5px;
    color: ${(props: Props) =>
      props.like  === false? "blue" : ({ theme }) => theme.color};
  }
  /* color: ${(props: Props) => (props.like === false ? "blue" : "black")} */
  /* color: ${(props) => props.color} */
`;
export const Save = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  i {
    padding-right: 5px;
  }
  color: ${(props: Props) => (props.like ? "blue" : "black")};
  /* color: ${(props) => props.color} */
`;

export const ChannelDescContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Profile = styled.img`
  width: 60px;
  height: 60px;
  /* padding: 30px; */
`;

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const ChannelName = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 8px;
`;
export const Subscriber = styled.div`
  margin-bottom: 8px;
  color: #6d7886;
`;
export const VideoDescriptionDiv = styled.div`
width:70%;
  /* display: flex; */
`;
// export const Profile= styled.div`
//     display: flex;
// `
