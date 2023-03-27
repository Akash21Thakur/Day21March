// import { MainContainer } from "../../hocs/withSideTopNavbar/styleComponents";

import { inject, observer } from "mobx-react";
import HomeVideosStore from "../../stores/homeVideoStore";
import ThemeStore from "../../stores/themeStore";
import { MainContainer } from "./styleComponent";

interface Props{

}

interface InjectedProps extends Props{
    homeVideosStore: HomeVideosStore
}

const BackDrop = inject("homeVideosStore")(observer((props: Props )=> {
    const {homeVideosStore} = props as InjectedProps;
    const handleClick = () => {
        console.log("Drawer");
        homeVideosStore.toggleDrawerView();
    }

    return <>
    <MainContainer onClick={handleClick}/>
    </>
}))

export default BackDrop;