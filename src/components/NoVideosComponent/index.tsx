import { inject } from "mobx-react";
import { useNavigate } from "react-router";
import { NO_SEARCH } from "../../constants/logos";
import HomeVideosStore from "../../stores/homeVideoStore";
import {
  NoSearchImageContainer,
  NoSearchRes,
  RetryButton,
  TryDiffContainer,
  Wrapper,
} from "./styleComponent";

interface Props{
  
}

interface InjectedProps extends Props{
  homeVideosStore: HomeVideosStore
}

const NoVideosComponent = inject('homeVideosStore')((props: Props) => {
   
  const {homeVideosStore} = props as InjectedProps;

  const refreshPage = () => {
    homeVideosStore.updateSearchedText('');
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
});

export default NoVideosComponent;
