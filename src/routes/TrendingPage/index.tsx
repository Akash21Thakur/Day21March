import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import TrendingPageContent from "../../components/TrendingPageContent";
import withSideTopNavBar from "../../hocs/withSideTopNavbar";
// import { MainContainer } from "../HomePage/styleComponents";

const TrendingPage = () => {
  return (
    <>
      {/* <TopNavBar />
      <MainContainer>
        <SideNavBar /> */}
        <TrendingPageContent />
      {/* </MainContainer> */}
    </>
  );
};

export default withSideTopNavBar(TrendingPage);
