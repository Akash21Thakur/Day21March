import { Link } from "react-router-dom";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
// import {HomeVideoModel} from "../../stores/model/homeVideoModel";
import {ViewsAndDateDiv,VideoTitle,VideoChannelDetails,VideoDescription, VideoCardMainDiv } from "./styleComponent";
interface Props{
    key: string;
}

interface DataTypeex{
    data: HomeVideoModel; 
} 
const HomeVideoCard = (props: any) => {
    const {data}= props;
    // const {data,}
    // console.log(data);
    // console.log(props);
    // var data: any; 
  return <> 
    
  <Link to={`/videos/${data.id}`} className='link'>
      <VideoCardMainDiv>
           <img src={data.thumbnailUrl} alt='#'></img>
           <VideoDescription>
            <img src={data.channel.profileImageUrl}></img>
           <VideoChannelDetails>
               <VideoTitle>{data.title}</VideoTitle>
               <div>{data.channel.name}</div>
               <ViewsAndDateDiv>
                <div>{data.viewCount}</div>
                <div>.</div>
                <div>{data.publishedAt}</div>
               </ViewsAndDateDiv>
           </VideoChannelDetails>
           </VideoDescription>
      </VideoCardMainDiv>
  </Link>
  </>;
};

export default HomeVideoCard;
