import styled from "styled-components";
interface Props{
  val: boolean
}
export const Wrapper = styled.div<Props>`
  display: flex;
  width: 100%;
  padding: 50px;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 576px) {
    /* flex-direction: column; */
    width:${(props) => props.val ? 'calc(100vw - 300px)' : '100%'};
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
  }
`;

export const HomeVideosMainDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  height:100%;
  overflow-y: auto;

  .link{
    color: ${({theme}) => theme.color};
    text-decoration: none;
  }

  @media (max-width: 576px) {
    /* flex-direction: column; */
    justify-content: center;

    i{
      margin-right: 0px;
    }

   
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
