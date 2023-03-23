



import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import NoSavedVideos from "../NoSavedVideos";
import PageHeader from "../PageHeader";
import TrendingVideoCard from "../TrendingVideoCard";
import { TrendingVideosContaniner, Wrapper } from "./styleComponent";
// import { FireIcon, Header, IconContainer, PageTitle, Wrapper } from "./styleComponent";

const TrendingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props ;  
    useEffect(()=>{
      homeVideosStore.fetchTrendingVideoList();
    },[])
    
    
    const renderTrendingVideos = () => {
      const videoList = toJS(homeVideosStore.trendingVideosList);
      return <>
      {videoList && 
          videoList.map((each: HomeVideoModel) => {
            return <TrendingVideoCard key={each.id} data={each} />;
          })
        }
         
      </>
    }
    const renderLoader = ()=> {
      return <div>Loading</div>
    }
    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusTrendingVideos;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
         return renderLoader();
          
          case ApiStatus.SUCESS:
            // {console.log("Successs")}
            return renderTrendingVideos();
            
            default:
            return <div>Video Details</div>;
           
      }
    };
    // let apiStatus=homeVideosStore.apiStatusTrendingVideo;
    return (
      <>
      <Wrapper>
        <PageHeader text='Trending'/>
         <TrendingVideosContaniner>
          {/* {homeVideosStore.} */}
          {renderThings()}
          </TrendingVideosContaniner> 
        
      </Wrapper>
        
      </>
    ); 
  }))
  
  export default TrendingPageContent; 
  

