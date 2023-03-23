import { inject, observer } from "mobx-react";
import { shallowEnhancer } from "mobx/dist/internal";
import { useState } from "react";
import { DARK_THEME_LOGO, LIGHT_THEME_LOGO } from "../../constants/logos";
import {
  BuyNextParaContainer,
  CrossButton,
  GetItNowBotton,
  LeftContainer,
  NxtwatchLogo,
  Wrapper,
} from "./styleComponent";

const Banner = inject('homeVideosStore')(observer((props: any) => {
    // const [show,setShow] =useState(false);
    const {homeVideosStore} = props;
 const handleClick = () => {
    //  setShow(true)
    homeVideosStore.removeBanner();
    console.log(homeVideosStore.showBanner)
 }

  return ( 
    <>
      <Wrapper style={{display: homeVideosStore.showBanner ? 'flex' :'none' }}>
        <LeftContainer>
          <NxtwatchLogo src={LIGHT_THEME_LOGO} />
          <BuyNextParaContainer>
            Buy Nxt Watch Premium Prepaid Plans With UPI
          </BuyNextParaContainer>
          <GetItNowBotton>GET IT NOW</GetItNowBotton>
        </LeftContainer>
        <CrossButton onClick={handleClick}>X</CrossButton>
      </Wrapper>
    </>
  );
}))

export default Banner;
