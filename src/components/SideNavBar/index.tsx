import { inject, observer } from "mobx-react"
import HomeVideosStore from "../../stores/homeVideoStore"
import ThemeStore from "../../stores/themeStore"
import BackDrop from "../BackDrop"
import ContactDiv from "../ContactDiv"
import EachPageDiv from "../EachPageDiv"
import { SideNavBarDiv } from "./styleComponent"
interface Props{}
interface InjectedProps extends Props{
    homeVideosStore: HomeVideosStore
    themeStore: ThemeStore
    
}
const SideNavBar = inject("homeVideosStore", "themeStore")(observer((props: Props) => {
    const {themeStore, homeVideosStore} = props as InjectedProps
    // const val = homeVideosStore.showDrawerList;
    let clName='side-drawer';
    if(homeVideosStore.showDrawerList)
       clName='side-drawer open';
    return (
        <>
       {homeVideosStore.showDrawerList && <BackDrop />}
        <SideNavBarDiv className={clName} val={homeVideosStore.showDrawerList} isDark={themeStore.isDark}>
           <EachPageDiv/>
           <ContactDiv />
        </SideNavBarDiv>
        </>
    )
}))

export default SideNavBar