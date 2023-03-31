import { inject, observer } from "mobx-react";
import { NoSavedVideosContainer, NotFound, NotFoundDesc, Wrapper } from "../../components/NoSavedVideos/styleComponent";
import { NOT_FOUND_DARK, NOT_FOUND_LIGHT } from "../../constants/ImageUrlConstant";
// import { NOT_FOUND_DARK, NOT_FOUND_LIGHT, NO_SAVED } from "../../constants/logos";
import withSideTopNavBar from "../../hocs/withSideTopNavbar"
import ThemeStore from "../../stores/themeStore";
interface Props{}
interface InjectedProps extends Props{
    themeStore: ThemeStore
}
const PageNotFound = inject("themeStore")(observer((props : Props) => {
    const {themeStore} = props as InjectedProps;

    return <>
    <Wrapper>

<NoSavedVideosContainer src={!themeStore.isDark ? NOT_FOUND_LIGHT : NOT_FOUND_DARK} />
<NotFound>Page Not found</NotFound>
<NotFoundDesc>We are sorry, the page you requested could not be found.</NotFoundDesc>
</Wrapper>
    </>
}))

export default withSideTopNavBar(PageNotFound);