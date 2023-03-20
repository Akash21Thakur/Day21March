import { inject, observer } from "mobx-react";

const SavedVideosPageContent = inject('homeVideosStore')(observer((props: any) => {
    const {homeVideosStore} = props;
    // console.log(homeVideosStore);
    return (
      <>
        <div>SavedVideosPageContent</div>
      </>
    );
  }))
  
  export default SavedVideosPageContent;
  