


import { inject, observer } from "mobx-react";

const GamingPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props;
    console.log(homeVideosStore.gamingVideosList);
    return (
      <>
        <div>GamingPageContent</div>
      </>
    );
  }))
  
  export default GamingPageContent;
  

