import Cookies from "js-cookie";
import { Navigate } from "react-router";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "./styleComponents";

const withSideTopNavBar = (WrapperComponent: React.ComponentType<any>) => {
  const MainHocContent = () => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <TopNavBar />
        <MainContainer>
          <SideNavBar />
          <WrapperComponent />
        </MainContainer>
      </>
    );
  };

  return MainHocContent;
};

export default withSideTopNavBar;
