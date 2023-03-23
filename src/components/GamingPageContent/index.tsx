


import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import GamingVideoCard from "../GamingVideoCard";
import PageHeader from "../PageHeader";
import { Wrapper } from "../TrendingPageContent/styleComponent";
import { GamingVideosContaniner } from "./styleComponent";

const GamingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props;
    const videoList = toJS(homeVideosStore.gamingVideosList);
    const renderGamingVideos = () => {
      return <>
         {videoList && 
            videoList.map((each: HomeVideoModel) => {
              return <GamingVideoCard key={each.id} data={each} />;
            })
          }
      </>
    }

    const renderLoader = ()=> {
      return <div>Loading</div>
    }
    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusGamingVideos;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
         return renderLoader();
          
          case ApiStatus.SUCESS:
            // {console.log("Successs")}
            return renderGamingVideos();
            
            default:
            return <div>Video Details</div>;
           
      }
    };
    return (
      <>
      <Wrapper>
        <PageHeader text='Gaming'/>
         <GamingVideosContaniner>
          {/* {homeVideosStore.} */}
          {renderThings()}
          </GamingVideosContaniner> 
        
      </Wrapper>
        
      </>
    )
  }))
  
  export default GamingPageContent;
  

