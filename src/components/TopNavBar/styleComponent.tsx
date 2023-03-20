import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height:72px;
  justify-content: space-between;
  /* background-color: white; */
  /* height: 50px; */

  i {
    font-size: 35px;
    margin: 15px;
    cursor: pointer;
  }

  .lightmode{
    color:#fff;
    font-size: 35px;
    margin: 15px;
  }

  .profile-pic {
    width: 35px;
    height: 35px;
    margin: 15px;
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
  width:300px;
  cursor: pointer;
  /* padding: 10px; */

  img {
    padding: 20px;
    padding-left: 30px;
    width: 150px;
    height: 30px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
