import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { HomeVideoDummyData } from "../../fixtures/homeVideoFixture";
// import { MainContainer } from "../../routes/HomePage/styleComponents";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
import { ApiStatus } from "../../stores/types";
import Banner from "../Banner";
import { Icon } from "../EachPageDiv/styleComponent";
// import HomeVideoModel from "../../stores/model/homeVideoModel";
import HomeVideoCard from "../HomeVideoCard";
import NoVideosComponent from "../NoVideosComponent";
import {
  SearchVideos,
  HomeVideosMainDiv,
  Wrapper,
  SearchWithIcon,
  SearchIconDiv,
  SearchIcon,
} from "./styledComponent";

interface Props {}

interface InjectedProps extends Props {
  homeVideosStore: HomeVideosStore;
}

const HomePageContent = inject("homeVideosStore")(
  observer((props: any) => {
    const { homeVideosStore } = props;

    // const updatedHomeVideosList=HomeVideoDummyData;
    const handleSearch = (event: any) => {
      // console.log(homeVideosStore.completeVideoList);
      homeVideosStore.updateSearchedText(event.target.value);
      //  {console.log(homeVideosStore.searchedText)}
    };

    useEffect(() => {
      homeVideosStore.fetchHomeVideoList();
    }, []);

    const renderHistoryList = () => {
      const updatedHomeVideosList = homeVideosStore.homeVideoListFn;

      return (
        <>
          {updatedHomeVideosList &&
            (updatedHomeVideosList.length > 0 ? (
              updatedHomeVideosList.map((each: HomeVideoModel) => {
                return <HomeVideoCard key={each.id} data={each} />;
              })
            ) : (
              <NoVideosComponent />
            ))}
        </>
      );
    };

    const renderLoader = ()=> {
      return <div>Loading</div>
    }
    const renderThings = () => {
      const apiStatus = homeVideosStore.apiStatusHomeVideos;
      // console.log(apiStatus)
      switch (apiStatus) {
        case ApiStatus.LOADING:
         return renderLoader();
          
          case ApiStatus.SUCESS:
            // {console.log("Successs")}
            return renderHistoryList();
            
            default:
            return <div>Video Details</div>;
           
      }
    };

    return (
      <>
        {/* {console.log(homeVideosStore.searchedText)}
    <input type='search' value={homeVideosStore.searchedText} onChange={e => handleSearch(e)}/> */}
        {/* {console.log(homeVideosStore.homeVideosList)} */}
        <Wrapper>
          <Banner />
          <SearchWithIcon>
            <SearchVideos
              type="search"
              value={homeVideosStore.searchedText}
              onChange={(event) => handleSearch(event)}
            />
            <SearchIconDiv className="search-icon">
              <SearchIcon className="fa-solid fa-magnifying-glass" />
            </SearchIconDiv>
          </SearchWithIcon>

          <HomeVideosMainDiv>
            {renderThings()}
          </HomeVideosMainDiv>
        </Wrapper>
      </>
    );
  })
);

export default HomePageContent;
