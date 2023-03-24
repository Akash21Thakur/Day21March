import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import HomeVideosStore from "../../stores/homeVideoStore";
import { BaseVideoModel, HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import FailureViewComponent from "../FailureViewComponent";
import GamingVideoCard from "../GamingVideoCard";
import Loader from "../Loader";
import PageHeader from "../PageHeader";
import { Wrapper } from "../TrendingPageContent/styleComponent";
import { GamingVideosContaniner } from "./styleComponent";

interface Props{}

interface InjectedProps extends Props{
  homeVideosStore: HomeVideosStore
}

const GamingPageContent = inject("homeVideosStore")(
  observer((props: Props) => {
    const { homeVideosStore } = props as InjectedProps;
    const videoList = toJS(homeVideosStore.gamingVideosList);
    const renderGamingVideos = () => {
      return (
        <>
          {videoList &&
            videoList.map((each: BaseVideoModel) => {
              return <GamingVideoCard key={each.id} data={each} />;
            })}
        </>
      );
    };

    const renderLoader = () => {
      return <div>Loading</div>;
    };

    const renderWhenFailure = () => {
      return <div>Failed</div>
    }
    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusGamingVideos;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
          return <Loader />

        case ApiStatus.SUCESS:
          // {console.log("Successs")}
          return renderGamingVideos();

        case ApiStatus.FAILURE:
          // return <div>Akash</div>
         return <FailureViewComponent />
          // break;

        default:
          return <div>Video Details</div>;
      }
    };

    useEffect(()=>{
homeVideosStore.fetchGamingVideoList();
    },[])
    return (
      <>
        <Wrapper>
          <PageHeader text="Gaming" />
          <GamingVideosContaniner>
            {/* {homeVideosStore.} */}
            {renderThings()}
          </GamingVideosContaniner>
        </Wrapper>
      </>
    );
  })
);

export default GamingPageContent;
