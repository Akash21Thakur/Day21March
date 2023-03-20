import Cookies from "js-cookie";
import { inject } from "mobx-react";
import { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router";
// import { ThemeContext1 } from "../../App";
// import { ThemeContext } from "styled-components";
import HomePageContent from "../../components/HomePageContent";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import withSideTopNavBar from "../../hocs/withSideTopNavbar";
import ThemeStore from "../../stores/themeStore";
// import ThemeStore from "../../stores/themeStore";
// import { MainContainer } from "./styleComponents";

interface Props {}

interface InjectedProps extends Props {
  themeStore: ThemeStore;
}

const HomePage = inject("themeStore")((props: Props) => {
  // const [isDark,setTheme] = useState<boolean>(false);
  // const jwtToken = Cookies.get("jwt_token");
  // if (jwtToken === undefined) {
  //   return <Navigate to="/login" />;
  // }

  //   const deleteToken = () => {
  //     Cookies.remove('jwt_token');
  //     return  <Navigate to='/login' />
  //   }

  //   const handleClick = async () => {
  //     const url = 'https://apis.ccbp.in/videos/all?search=Sehwag';
  //     const token=Cookies.get('jwt_token');
  //     // console.log(token);
  //     const option = {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       },
  //       method: 'GET',
  //     }
  //     try{
  //       const response = await fetch(url,option);
  //       const data= await response.json();
  //       if(response.ok){
  //         console.log(data);
  //       }else{
  //         console.log(data.error_msg);
  //       }
  //     }catch(err){
  //       console.error(err);
  //     }
  //   }

  //   const handleTheme = () => {
  //     props.toggleTheme();
  //   }

  const { themeStore } = props as InjectedProps;
  // console.log(themeStore);

  return (
    <>
      {/* <button onClick={handleClick}>Click Here</button>
        <button onClick={deleteToken}>Remove Token</button>
        
        <button onClick={handleTheme}>Change Theme</button> */}
      {/* {console.log(theme)} */}
      {/* <TopNavBar />
      <MainContainer>
        <SideNavBar /> */}
        <HomePageContent />
      {/* </MainContainer> */}
      {/* <Outlet /> */}
    </>
  );
});

export default withSideTopNavBar(HomePage);
