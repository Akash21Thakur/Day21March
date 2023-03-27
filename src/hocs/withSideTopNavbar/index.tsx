import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate } from "react-router";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "./styleComponents";

const withSideTopNavBar = (WrapperComponent: React.ComponentType<any>) => {
  const MainHocContent = () => {
    // const [showDrawer,toggleDrawer] = useState(false);
    // const handleDrawerClick = () => {
    //   toggleDrawer(prevState => (!prevState))
    // }
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <TopNavBar />
        <MainContainer>
          <SideNavBar />
          <WrapperComponent className='wrapper'/>
        </MainContainer>
      </>
    );
  };

  return MainHocContent;
};

export default withSideTopNavBar;
