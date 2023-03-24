import { Link } from "react-router-dom";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import { Views } from "../GamingVideoCard/styleComponent";
import { ChannelName } from "../TrendingVideoCard/styleComponent";
// import {HomeVideoModel} from "../../stores/model/homeVideoModel";
import {ViewsAndDateDiv,VideoTitle,VideoChannelDetails,VideoDescription, VideoCardMainDiv, ThumbnailDiv, ChannelIcon } from "./styleComponent";
interface Props{
    
    data: HomeVideoModel; 
}


const HomeVideoCard = (props: Props) => {
    const {data}= props;
    // const {data,}
    // console.log(data);
    // console.log(props);
    // var data: any; 
  return <> 
    
  <Link to={`/videos/${data.id}`} className='link'>
      <VideoCardMainDiv>
           <ThumbnailDiv src={data.thumbnailUrl} alt='#' />
           <VideoDescription>
            <ChannelIcon src={data.channel?.profileImageUrl}/>
           <VideoChannelDetails>
               <VideoTitle>{data.title}</VideoTitle>
               <ChannelName>{data.channel?.name}</ChannelName>
               {/* <ViewsAndDateDiv> */}
                <Views>{data.viewCount} views . {data.publishedAt}</Views>
                {/* <div>.</div> */}
                {/* <div></div> */}
               {/* </ViewsAndDateDiv> */}
           </VideoChannelDetails>
           </VideoDescription>
      </VideoCardMainDiv>
  </Link>
  </>;
};

export default HomeVideoCard;
