import styled from "styled-components";

export const GamingVideosContaniner =styled.div`
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow-y: auto;
    /* margin-top: 20px; */
    padding: 50px;
    background-color: ${({theme}) => theme.background_color};

    .link{
    color: ${({theme}) => theme.color};
    text-decoration: none;
  }
`