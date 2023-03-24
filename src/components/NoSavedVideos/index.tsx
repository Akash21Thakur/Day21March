import { NO_SAVED } from "../../constants/logos";
import { NoSavedVideosContainer, NotFound, NotFoundDesc, Wrapper } from "./styleComponent";

const NoSavedVideos = () => {
  return (
    <>
    <Wrapper>

      <NoSavedVideosContainer src={NO_SAVED} />
      <NotFound>No saved videos found</NotFound>
      <NotFoundDesc>You can save your videos while watching them</NotFoundDesc>
    </Wrapper>
    </>
  );
};

export default NoSavedVideos;
