import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import Loader from "../Loader";
import NoSavedVideos from "../NoSavedVideos";
import PageHeader from "../PageHeader";
import {
  TrendingVideosContaniner,
  Wrapper,
} from "../TrendingPageContent/styleComponent";
import TrendingVideoCard from "../TrendingVideoCard";


interface Props{}

interface InjectedProps extends Props{
  homeVideosStore: HomeVideosStore
}


const SavedVideosPageContent = inject("homeVideosStore")(
  observer((props: Props) => {
    const [isLoading, setLoading] = useState(true);
    // const [videoList,setVideoList] = useState<HomeVideosStore[]>([]);
    const { homeVideosStore } = props as InjectedProps;
    // let videoList: HomeVideosStore[];
    // let videoLits
    // console.log(homeVideosStore)
    const videoList = toJS(homeVideosStore.savedVideoList) as HomeVideoModel[];
    // console.log(videoList);
    // debugger
    const renderSavedVideos = () => {
      console.log(videoList);
      return (
        <>
          {videoList &&
            (videoList.length > 0 ? (
              videoList.map((each: HomeVideoModel) => {
                return <TrendingVideoCard key={each.id} data={each} />;
              })
            ) : (
              <NoSavedVideos />
            ))}
            {/* <div>Hey There</div> */}
        </>
      );
    };

    const renderLoader = () => {
      return <Loader/>
    };

    useEffect(() => {
      // videoList = (toJS(homeVideosStore.savedVideoList));
      console.log(homeVideosStore.savedVideoList)
      // debugger
      setLoading(false);
    }, []);
    return (
      <>
        <Wrapper val={homeVideosStore.showDrawerList}>
          <PageHeader text="Saved Videos" />
          <TrendingVideosContaniner>
            {/* {homeVideosStore.} */}
            {/* <div>Hey</div> */}
            {isLoading ? renderLoader() : renderSavedVideos()}
          </TrendingVideosContaniner>
        </Wrapper>
      </>
    );
  })
);

export default SavedVideosPageContent;
