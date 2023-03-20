import ContactDiv from "../ContactDiv"
import EachPageDiv from "../EachPageDiv"
import { SideNavBarDiv } from "./styleComponent"

const SideNavBar = () => {
    return (
        <>
        <SideNavBarDiv>
           <EachPageDiv/>
           <ContactDiv />
        </SideNavBarDiv>
        </>
    )
}

export default SideNavBar