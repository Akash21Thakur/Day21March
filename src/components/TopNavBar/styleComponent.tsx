import styled from "styled-components";
interface Props{
  // val: boolean,
  isDark: boolean
}
export const Header = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: space-between;
   background-color: ${(props) => !props.isDark ? '#fff' : '#3b3a3a7f'};
  /* background-color: white; */
  /* height: 50px; */

  i {
  }

  .lightmode {
    color: #fff;
    font-size: 35px;
    margin: 15px;
  }

  .profile-pic {
    width: 35px;
    height: 35px;
    margin: 15px;
  }


  
`;

export const ThemeIcon = styled.i`
  font-size: 35px;
  margin: 15px;
  cursor: pointer;
`;
export const Drawer = styled.i`
  display: none;
  font-size: 25px;

  @media (max-width: 720px) {
   display: block;
  }
  /* font-weight: 500; */
`;

export const ProfileImageContainer = styled.img`
   @media (max-width: 720px) {
   display: none;
  }
`;
export const Logout = styled.button`
  font-weight: bold;
  font-size: 14px;
  padding: 8px;
  color: rgb(59, 130, 246);
  border: none;
  border: 2px solid rgb(59, 130, 246);
  margin: 15px;
  cursor: pointer;
  /* mar */
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  cursor: pointer;
  /* padding: 10px; */

  img {
    padding: 20px;
    padding-left: 30px;
    width: 150px;
    height: 30px;
  }
`;

export const Para = styled.p`
  
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box !important;

  .modal {
    position: absolute;
    color: red;
    width: 100%;
    /* background-color: ; */
  }
  .ReactModal__Content {
    div {
      padding: 0px !important;
    }
  }
  .Overlay {
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  /* border-radius: 16px; */
  background-color: ${({ theme }) => theme.background_color};
  /* width: 300px;
  height:200px; */
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  .confirm {
    background-color: #3b82f6;
    color: #fff;
  }
`;

export const Button1 = styled.button`
  background-color: #d0d7df;
  outline: none;
  border: 1px solid black;
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
`;
