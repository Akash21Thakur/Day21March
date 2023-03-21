import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  flex-direction: column;
`;

export const HomeVideosMainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height:100%;
  overflow-y: auto;

  .link{
    color: ${({theme}) => theme.color};
    text-decoration: none;
  }
`;
export const SearchWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  box-sizing: border-box;

  .search-icon {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    width: 60px;
    padding: 3px;
    cursor: pointer;
  }
  `;

export const SearchVideos = styled.input`
  width: 260px;
  outline: none;
  /* border-radius: 0px; */
  `;

export const SearchIconDiv= styled.div`
font-size: 14px;
  
`

export const SearchIcon = styled.i`
  
`
