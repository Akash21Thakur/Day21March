import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import HomeVideoDummyData from "../../fixtures/homeVideoFixture";
// import { MainContainer } from "../../routes/HomePage/styleComponents";
import HomeVideosStore from "../../stores/homeVideoStore";
import { HomeVideoModel } from "../../stores/model/homeVideoModel";
// import HomeVideoModel from "../../stores/model/homeVideoModel";
import HomeVideoCard from "../HomeVideoCard";
import NoVideosComponent from "../NoVideosComponent";
import {
  SearchVideos,
  HomeVideosMainDiv,
  Wrapper,
  SearchWithIcon,
} from "./styledComponent";

interface Props {}

interface InjectedProps extends Props {
  homeVideosStore: HomeVideosStore;
}

const HomePageContent = inject("homeVideosStore")(
  observer((props: Props) => {
    const { homeVideosStore } = props as InjectedProps;

    // const updatedHomeVideosList=HomeVideoDummyData;
    const handleSearch = (event: any) => {
      homeVideosStore.updateSearchedText(event.target.value);
      //  {console.log(homeVideosStore.searchedText)}
    };

    // useEffect(()=>{https://youtu.be/qVmaFOjrZJY
    //   homeVideosStore.getVideoList('home');
    // },[])
    const renderHistoryList = () => {
      const updatedHomeVideosList = homeVideosStore.homeVideoListFn;
 
      return (
        <>
          {updatedHomeVideosList && (updatedHomeVideosList.length > 0 ? (
            updatedHomeVideosList.map((each: HomeVideoModel) => {
              return <HomeVideoCard key={each.id} data={each} />;
            })
          ) : (
            <NoVideosComponent />
          ))}
        </>
      );
    };


    const renderLoader = () => {
      return <div>Loading</div>;
    };

    return (
      <>
        {/* {console.log(homeVideosStore.searchedText)}
    <input type='search' value={homeVideosStore.searchedText} onChange={e => handleSearch(e)}/> */}
        {/* {console.log(homeVideosStore.homeVideosList)} */}
        <Wrapper>
          <SearchWithIcon>
            <SearchVideos
              type="search"
              value={homeVideosStore.searchedText}
              onChange={(event) => handleSearch(event)}
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </SearchWithIcon>

          <HomeVideosMainDiv>
            {homeVideosStore.isLoading ? renderLoader() : renderHistoryList()}
          </HomeVideosMainDiv>
        </Wrapper>
      </>
    );
  })
);

export default HomePageContent;
