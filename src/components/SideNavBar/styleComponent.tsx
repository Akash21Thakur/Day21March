import styled from "styled-components";
interface Props{
  val: boolean
}
export const SideNavBarDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  /* background-color: #d4dee7; */
  padding: 12px;

  @media (max-width: 576px) {
    display:${props => props.val ? 'block' : 'none'};;
    width: 100%;
  }
`;
