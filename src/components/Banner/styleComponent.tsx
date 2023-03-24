import styled from "styled-components";
import { BANNER_BG_IMG } from "../../constants/logos";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    color: black;
    /* height:600px; */
    padding:30px;
    background-image: url(${BANNER_BG_IMG});
    background-size: 100% 100%;
    margin-bottom: 60px;

    @media (max-width: 576px) {
   padding:15px;
   width:100%;
  }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CrossButton = styled.span`
    cursor: pointer;
    font-weight: 500 ;
    
`

export const NxtwatchLogo = styled.img`
    width:150px;
`

export const BuyNextParaContainer = styled.div`
    margin-top: 10px;
    font-size: 20px;
    width: 400px;

    @media (max-width: 576px) {
    width:200px;
  }
`

export const GetItNowBotton = styled.button`
    width: 120px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
    padding: 12px;
    background-color: white;
    border-width: 1px;
`