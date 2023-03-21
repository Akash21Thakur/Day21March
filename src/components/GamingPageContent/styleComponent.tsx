import styled from "styled-components";

export const GamingVideosContaniner =styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow-y: auto;
    /* margin-top: 20px; */
    padding: 50px;
    background-color: #dfe1e2;

    .link{
    color: ${({theme}) => theme.color};
    text-decoration: none;
  }
`