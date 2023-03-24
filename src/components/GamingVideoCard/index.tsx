import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import HomeVideosStore from "../../stores/homeVideoStore";
import { BaseVideoModel, HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ImageContainer, Title, Views, Wrapper } from "./styleComponent";
// import { Wrapper } from "../NoVideosComponent/styleComponent";
// import { ImageContainer, Title } from "../TrendingVideoCard/styleComponent";

interface Props{
  data: BaseVideoModel
}

interface InjectedProps extends Props{
  homeVideosStore: HomeVideosStore
}


const GamingVideoCard = inject("homeVideosStore")((props: Props) => {
    // const {homeVideosStore} = props.data;
    // console.log(props.data);
    const {data}=props;
  return (
    <>
    <Link to={`/videos/${data.id}`} className='link'>
      <Wrapper>
        <ImageContainer src={data.thumbnailUrl} />
        <Title>{data.title}</Title>
        <Views>{data.viewCount} Watching Worldwide</Views>
      </Wrapper>
      {/* <Wrapper>
        <ImageContainer src={data.thumbnailUrl} />
        <ChannelDetails>
            <Title>{data.title}</Title>
            <ChannelName>{data.channel?.name}</ChannelName>
            <ViewsAndPublished>{data.viewCount} views . {data.publishedAt} </ViewsAndPublished>
        </ChannelDetails>
      </Wrapper> */}
    </Link>
    </>
  );
});

export default GamingVideoCard