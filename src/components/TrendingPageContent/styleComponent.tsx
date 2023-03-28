import styled from "styled-components";
interface Props{
  val: boolean
}
export const Wrapper = styled.div<Props>`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.background_color};
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    /* padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px; */
    box-sizing: border-box;

    @media (max-width: 720px) {
      width:${(props) => props.val ? 'calc(100vw - 300px)' : '100%'};
      
   padding:0px;
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

  @media (max-width: 720px) {
   padding:40px;
   /* width:100%; */
   display: flex;
   flex-direction: column;
   align-items: center;
  }

`