import { FB_LOGO, LN_LOGO, TW_LOGO } from "../../constants/logos";
import { MediaHandles, ContactCont, ImageContainer, ContactDescConatiner, ContactUsDiv } from "./styleComponent";

const ContactDiv = () => {
    return <>
    <ContactCont>
        <ContactUsDiv>CONTACT US</ContactUsDiv>
        {/* <div >CONTACT US</div> */}
        <MediaHandles>
           <ImageContainer src={FB_LOGO}/>
           <ImageContainer src={LN_LOGO}/>
           <ImageContainer src={TW_LOGO}/>
        </MediaHandles>
            <ContactDescConatiner>Enjoy! Now to see your channels and recommendations!</ContactDescConatiner>
        {/* <div>
            
        </div> */}
    </ContactCont>
    </>
}

export default ContactDiv;