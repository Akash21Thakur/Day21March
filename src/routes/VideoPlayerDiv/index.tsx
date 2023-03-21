import { useParams } from "react-router";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import VideoDetails from "../../components/VideoDetails";
import withSideTopNavBar from "../../hocs/withSideTopNavbar";
import { MainContainer } from "../../hocs/withSideTopNavbar/styleComponents";
// import { MainContainer } from "../HomePage/styleComponents";

const VideoPlayerDiv = (props: any) => {
    const params=useParams();
    // console.log(params);
    return <>
      {/* <TopNavBar />
      <MainContainer>
        <SideNavBar /> */}
           <VideoDetails videoId={params.id}/>
      {/* </MainContainer> */}
    </>
}

export default withSideTopNavBar(VideoPlayerDiv)