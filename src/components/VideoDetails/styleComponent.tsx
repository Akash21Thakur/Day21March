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
  background-color: black;
  margin-top: 20px;
`;

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const VideoTitle = styled.div`
  margin-top: 15px;
`;

export const ViewsLikeSaveDiv = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: space-between;
`;
export const ViewsPublishedDiv = styled.div`
  display: flex;
`;

export const ViewCount = styled.div``;

export const PublishedAt = styled.div`
  padding-left: 5px;
`;
export const LikeDislikeSaveDiv = styled.div`
  display: flex;
`;

interface Props{
    like: boolean
}

export const LikeDislikeSave = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  i {
    padding-right: 5px;
  }
  color: ${(props: Props) => props.like ? 'blue' : 'black'}
  /* color: ${props => props.color} */
`
export const Dislike = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  i {
    padding-right: 5px;
  }
  color: ${(props: Props) => props.like ? 'blue' : 'black'}
  /* color: ${props => props.color} */
`
export const Save = styled.div<Props>`
  display: flex;
  padding-right: 16px;
  cursor: pointer;
  i {
    padding-right: 5px;
  }
  color: ${(props: Props) => props.like ? 'blue' : 'black'}
  /* color: ${props => props.color} */
`

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
  margin-bottom: 4px;
`;
export const Subscriber = styled.div`
  margin-bottom: 4px;
`;
export const VideoDescriptionDiv = styled.div`
  display: flex;
`;
// export const Profile= styled.div`
//     display: flex;
// `
