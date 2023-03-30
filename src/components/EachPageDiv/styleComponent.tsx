import styled from "styled-components";

export const EachPageCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding-top: 15px; */
  color: #fff;
  .active {
      text-decoration: none;
      background-color: #d3cccc88;
      font-weight: bold;
      
    i {
      color: red;
    }
  }

  .navlink{
    
    color: ${({theme}) => theme.color};
    text-decoration: inherit;
    padding: 6px;
  }

  `;
export const IconTextDiv = styled.div`

  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 12px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;

 

  div {
    padding-left: 16px;
    
  }
`;

export const Icon = styled.i`
  width: 18px;
    height: 16px;
    padding: 4px;
    color: grey;
`

export const PageName= styled.div`
  
`


