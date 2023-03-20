import GamingPageContent from "../../components/GamingPageContent";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import withSideTopNavBar from "../../hocs/withSideTopNavbar";
// import { MainContainer } from "../HomePage/styleComponents";

const GamingPage = () => {
  return (
    <>
      {/* <TopNavBar />
      <MainContainer>
        <SideNavBar /> */}
        <GamingPageContent />
      {/* </MainContainer> */}
    </>
  );
};

export default withSideTopNavBar(GamingPage);
