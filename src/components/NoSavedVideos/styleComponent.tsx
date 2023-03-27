import styled from "styled-components";

export const NoSavedVideosContainer = styled.img`
    width: 400px;
    height:300px;

    @media (max-width: 576px) {
    /* flex-direction: column; */
    width:300px;
    height:225px;
  }
`

export const Wrapper= styled.div`
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content:center;
align-items: center;
    width:100%;
    height:calc( 100vh - 72px);
`

export const NotFound = styled.h1`
@media (max-width: 576px) {
    /* flex-direction: column; */
    font-size: 25px;
  }`
export const NotFoundDesc = styled.span`
 text-align: center;
`