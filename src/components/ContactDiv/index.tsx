import { FB_LOGO, LN_LOGO, TW_LOGO } from "../../constants/logos";
import { MediaHandles, ContactCont } from "./styleComponent";

const ContactDiv = () => {
    return <>
    <ContactCont>
        <div >CONTACT US</div>
        <MediaHandles>
           <img src={FB_LOGO}/>
           <img src={LN_LOGO}/>
           <img src={TW_LOGO}/>
        </MediaHandles>
        <div>
            Enjoy! Now to see your channels and recommendations!
        </div>
    </ContactCont>
    </>
}

export default ContactDiv;