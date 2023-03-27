import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import {
  ChannelDetails,
  ChannelName,
  ImageContainer,
  Title,
  ViewsAndPublished,
  Wrapper,
} from "./styleComponent";

interface Props {
  data: HomeVideoModel;
}

const TrendingVideoCard = (props: Props) => {
  // const {homeVideosStore} = props.data;
  // console.log(props.data);
  const { data } = props;
  return (
    <>
      <Link to={`/videos/${data.id}`} className="link">
        <Wrapper>
          <ImageContainer src={data.thumbnailUrl} />
          <ChannelDetails className="channel-details">
            <Title>{data.title}</Title>
            <ChannelName>{data.channel?.name}</ChannelName>
            <ViewsAndPublished>
              {data.viewCount} views . {data.publishedAt}{" "}
            </ViewsAndPublished>
          </ChannelDetails>
        </Wrapper>
      </Link>
    </>
  );
};

export default TrendingVideoCard;
