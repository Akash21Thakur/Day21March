


import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import GamingVideoCard from "../GamingVideoCard";
import PageHeader from "../PageHeader";
import { Wrapper } from "../TrendingPageContent/styleComponent";
import { GamingVideosContaniner } from "./styleComponent";

const GamingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props;
    const videoList = toJS(homeVideosStore.gamingVideosList);
    const renderTrendingVideos = () => {
      return <>
         {videoList && 
            videoList.map((each: HomeVideoModel) => {
              return <GamingVideoCard key={each.id} data={each} />;
            })
          }
      </>
    }
    return (
      <>
      <Wrapper>
        <PageHeader text='Gaming'/>
         <GamingVideosContaniner>
          {/* {homeVideosStore.} */}
          {renderTrendingVideos()}
          </GamingVideosContaniner> 
        
      </Wrapper>
        
      </>
    )
  }))
  
  export default GamingPageContent;
  

