import { inject } from "mobx-react";
import { useNavigate } from "react-router";
import { FAILURE_LIGHT } from "../../constants/ImageUrlConstant";
// import { FAILURE_LIGHT } from "../../constants/logos";
import { NoSearchImageContainer, NoSearchRes, RetryButton, TryDiffContainer, Wrapper } from "../NoVideosComponent/styleComponent";
import { PleaseTry } from "./styleComponent";

const FailureViewComponent = () => {
    
    // const {homeVideosStore}= props;
    
    const refreshPage = () => {
        // homeVideosStore.updateSearchedText('');
        window.location.reload();
        // console.log(homeVideosStore);
    }

    return (<>
        <Wrapper>
            <NoSearchImageContainer src={FAILURE_LIGHT} />
            <NoSearchRes>Oops! Something Went Wrong</NoSearchRes>
            <TryDiffContainer>We are having some trouble to complete your request.</TryDiffContainer>
            <PleaseTry>Please Try Again</PleaseTry>
            <RetryButton onClick={refreshPage}>Retry</RetryButton>
        </Wrapper>
    </>)
}
export default FailureViewComponent