import { inject, observer } from "mobx-react"
import HomeVideosStore from "../../stores/homeVideoStore"
import ContactDiv from "../ContactDiv"
import EachPageDiv from "../EachPageDiv"
import { SideNavBarDiv } from "./styleComponent"
interface Props{}
interface InjectedProps extends Props{
    homeVideosStore: HomeVideosStore
}
const SideNavBar = inject("homeVideosStore")(observer((props: Props) => {
    const {homeVideosStore} = props as InjectedProps
    // const val = homeVideosStore.showDrawerList;
    return (
        <>
        <SideNavBarDiv val={homeVideosStore.showDrawerList}>
           <EachPageDiv/>
           <ContactDiv />
        </SideNavBarDiv>
        </>
    )
}))

export default SideNavBar