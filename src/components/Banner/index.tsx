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

const Banner = () => {
    const [show,setShow] =useState(false);
 const handleClick = () => {
     setShow(true)
 }

  return (
    <>
      <Wrapper style={{display: show ? 'none' : 'flex'}}>
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
};

export default Banner;
