



import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import NoSavedVideos from "../NoSavedVideos";
import PageHeader from "../PageHeader";
import TrendingVideoCard from "../TrendingVideoCard";
import { TrendingVideosContaniner, Wrapper } from "./styleComponent";
// import { FireIcon, Header, IconContainer, PageTitle, Wrapper } from "./styleComponent";

const TrendingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props ;  
    const videoList = toJS(homeVideosStore.trendingVideosList);
    useEffect(()=>{
      homeVideosStore.fetchTrendingVideoList();
    },[])
    const renderTrendingVideos = () => {
      return <>
      {videoList && 
          videoList.map((each: HomeVideoModel) => {
            return <TrendingVideoCard key={each.id} data={each} />;
          })
        }
         
      </>
    }
    return (
      <>
      <Wrapper>
        <PageHeader text='Trending'/>
         <TrendingVideosContaniner>
          {/* {homeVideosStore.} */}
          {renderTrendingVideos()}
          </TrendingVideosContaniner> 
        
      </Wrapper>
        
      </>
    ); 
  }))
  
  export default TrendingPageContent; 
  

