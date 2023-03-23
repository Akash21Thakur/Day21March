import styled from "styled-components";
import { BANNER_BG_IMG } from "../../constants/logos";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    /* height:600px; */
    padding:30px;
    background-image: url(${BANNER_BG_IMG});
    background-size: 100% 100%;
    margin-bottom: 60px;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CrossButton = styled.div`
    cursor: pointer;
`

export const NxtwatchLogo = styled.img`
    width:150px;
`

export const BuyNextParaContainer = styled.div`
    margin-top: 10px;
    font-size: 20px;
    width: 400px;
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