import { inject } from "mobx-react";
import { useNavigate } from "react-router";
import { NO_SEARCH } from "../../constants/logos";
import {
  NoSearchImageContainer,
  NoSearchRes,
  RetryButton,
  TryDiffContainer,
  Wrapper,
} from "./styleComponent";

const NoVideosComponent = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Wrapper>
        <NoSearchImageContainer src={NO_SEARCH} />
        <NoSearchRes>No Search results found</NoSearchRes>
        <TryDiffContainer>
          Try different key words or remove search filter
        </TryDiffContainer>
        <RetryButton onClick={refreshPage}>Retry</RetryButton>
      </Wrapper>
    </>
  );
};

export default NoVideosComponent;
