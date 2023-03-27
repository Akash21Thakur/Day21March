import styled from "styled-components";
interface Props{
  val: boolean,
  isDark: boolean
}
export const SideNavBarDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  background-color: ${(props) => !props.isDark ? '#fff' : '#3b3a3a7f'};
  /* padding: 12px; */

  @media ((max-width: 992px) and  (min-width: 576px)) {
    
    /* font-size: 16px; */
    /* width: 180px; */
}

@media (max-width: 576px) {
  /* position: absolute; */
  z-index: 200;
  width:${props => props.val ?  '300px' : '0px' };
  overflow: hidden;
  transition: width 0.6s ease-in;
  /* display:${props => props.val ? 'flex' : 'none'};; */
  /* display: none; */
    /* width: 100%; */
  }

  
`;
