import Cookies from "js-cookie";
import { inject, observer } from "mobx-react";
import { useContext } from "react";
import { Navigate, useNavigate} from "react-router";

// import {use}
// import { ThemeContext1 } from "../../App";
import { DARK_THEME_LOGO, LIGHT_THEME_LOGO, WATCH_LOGO_DARK } from "../../constants/logos";
import ThemeStore from "../../stores/themeStore";
import { Icon } from "../EachPageDiv/styleComponent";
// import themeStore from "../../stores/themeStore";
import { Header, IconContainer, Logout, ProfileImageContainer, RightContainer, ThemeIcon } from "./styleComponent";

interface Props {}

interface InjectedProps extends Props {
  themeStore: ThemeStore
}

const TopNavBar = inject("themeStore")(observer((props: any) => {

    // const theme=useContext(ThemeContext1);
    // console.log(theme);
    
    const {themeStore}= props as InjectedProps;
    // console.log(themeStore);

    const handleClick = () => {
        // @ts-ignore
        // console.log(theme.isDark)
         
        //@ts-ignore
        // theme.toggleTheme();

        themeStore.toggleTheme();
    }

    const navigate=useNavigate();

    const handleLogout = () => {
      // const onClickLogout = () => {
      //   Cookie.remove('jwt_token')
      //   const {history} = props
      //   history.replace('/login')
      // }
        
                Cookies.remove('jwt_token');
                 navigate('/login');
            
    }

    const currTheme=themeStore.isDark;


    return (
        <>
        <Header >
        <IconContainer>
          <img src={currTheme ? DARK_THEME_LOGO : LIGHT_THEME_LOGO} />
        </IconContainer>
        <RightContainer>
        {/* <i class="fa-solid fa-sun"></i> */}
        <ThemeIcon className={(!currTheme ? 'fa-solid fa-moon darkmode' : 'fa-solid fa-sun lightmode')} onClick={handleClick}/>
        <ProfileImageContainer className="profile-pic" src={WATCH_LOGO_DARK} />
        <Logout onClick={handleLogout}>
            Logout
        </Logout>
        </RightContainer>
        </Header>
        </>
    )
}))

export default TopNavBar;