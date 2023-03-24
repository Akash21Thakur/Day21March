import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.background_color};
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;

    @media (max-width: 576px) {
   padding:0px;
   width:100%;
  }
`


export const TrendingVideosContaniner= styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    /* margin-top: 20px; */
    padding: 50px;
    background-color: ${({theme}) => theme.background_color};
    
    .link{
      color: ${({theme}) => theme.color};
      text-decoration: none;
      
  }

  @media (max-width: 576px) {
   padding:40px;
   width:100%;
  }

`