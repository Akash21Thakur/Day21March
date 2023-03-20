



import { inject, observer } from "mobx-react";

const TrendingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props;
    console.log(homeVideosStore);
    return (
      <>
        <div>TrendingPageContent</div>
      </>
    ); 
  }))
  
  export default TrendingPageContent; 
  

