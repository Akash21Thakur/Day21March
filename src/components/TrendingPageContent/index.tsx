import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import FailureViewComponent from "../FailureViewComponent";
import Loader from "../Loader";
import NoSavedVideos from "../NoSavedVideos";
import PageHeader from "../PageHeader";
import TrendingVideoCard from "../TrendingVideoCard";
import { TrendingVideosContaniner, Wrapper } from "./styleComponent";
// import { FireIcon, Header, IconContainer, PageTitle, Wrapper } from "./styleComponent";

interface Props{}

interface InjectedProps extends Props{
  homeVideosStore: HomeVideosStore
}

const TrendingPageContent = inject("homeVideosStore")(
  observer((props: Props) => {
    const { homeVideosStore } = props as InjectedProps;
    useEffect(() => {
      homeVideosStore.fetchTrendingVideoList();
    }, []);

    const renderTrendingVideos = () => {
      const videoList = toJS(homeVideosStore.trendingVideosList);
      return (
        <>
          {videoList &&
            videoList.map((each: HomeVideoModel) => {
              return <TrendingVideoCard key={each.id} data={each} />;
            })}
        </>
      );
    };
    // const renderLoader = () => {
    //   return <ColorRing
    //   visible={true}
    //   height="80"
    //   width="80"
    //   ariaLabel="blocks-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="blocks-wrapper"
    //   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    // />
    // };
    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusTrendingVideos;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
          return <Loader />

        case ApiStatus.SUCESS:
          // {console.log("Successs")}
          return renderTrendingVideos();
        case ApiStatus.FAILURE:
          // return <div>Akash</div>
          return <FailureViewComponent />;
        default:
          return <div>Video Details</div>;
      }
    };
    // let apiStatus=homeVideosStore.apiStatusTrendingVideo;
    return (
      <>
        <Wrapper val={homeVideosStore.showDrawerList}> 
          <PageHeader text="Trending" />
          <TrendingVideosContaniner>
            {/* {homeVideosStore.} */}
            {renderThings()}
          </TrendingVideosContaniner>
        </Wrapper>
      </>
    );
  })
);

export default TrendingPageContent;
