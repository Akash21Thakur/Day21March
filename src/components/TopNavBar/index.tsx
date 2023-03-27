import Cookies from "js-cookie";
import { inject, observer } from "mobx-react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Modal from "react-modal";
// import {use}
// import { ThemeContext1 } from "../../App";
import {
  DARK_THEME_LOGO,
  LIGHT_THEME_LOGO,
  WATCH_LOGO_DARK,
} from "../../constants/logos";
import ThemeStore from "../../stores/themeStore";
import { Icon } from "../EachPageDiv/styleComponent";
// import themeStore from "../../stores/themeStore";
import {
  Button1,
  ButtonsContainer,
  Drawer,
  Header,
  IconContainer,
  Logout,
  Para,
  PopupContainer,

  ProfileImageContainer,
  RightContainer,
  ThemeIcon,
} from "./styleComponent";
import ReactModal from "react-modal";
import { CrossButton } from "../Banner/styleComponent";
import HomeVideosStore from "../../stores/homeVideoStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: '0px'
    // background-color: 'none',
  },
};

interface Props {}

interface InjectedProps extends Props {
  themeStore: ThemeStore;
  homeVideosStore: HomeVideosStore;
}

const TopNavBar = inject("themeStore","homeVideosStore")(
  observer((props: Props) => {
    let subtitle;
   const {homeVideosStore} = props as InjectedProps;
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //  style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }

    // const theme=useContext(ThemeContext1);
    // console.log(theme);

    const { themeStore } = props as InjectedProps;
    // console.log(themeStore);

    const handleClick = () => {
      // @ts-ignore
      // console.log(theme.isDark)

      //@ts-ignore
      // theme.toggleTheme();

      themeStore.toggleTheme();
    };

    const navigate = useNavigate();
    const handleLogout = () => {
      // const onClickLogout = () => {
      //   Cookie.remove('jwt_token')
      //   const {history} = props
      //   history.replace('/login')
      // }
      // setIsOpen(true)

      Cookies.remove("jwt_token");
      navigate("/login");
    };

    const handleDrawer = () => {
         homeVideosStore.toggleDrawerView();
    }

    const currTheme = themeStore.isDark;

    return (
      <>
        <Header isDark={themeStore.isDark}>
          <IconContainer>
            <img src={currTheme ? DARK_THEME_LOGO : LIGHT_THEME_LOGO} />
          </IconContainer>
          <RightContainer>
            {/* <i class="fa-solid fa-sun"></i> */}
            <ThemeIcon
              className={
                !currTheme
                  ? "fa-solid fa-moon darkmode"
                  : "fa-solid fa-sun lightmode"
              }
              onClick={handleClick}
            />
            <Drawer  onClick={handleDrawer} className="fa-solid fa-list"/>
            <ProfileImageContainer
              className="profile-pic"
              src={WATCH_LOGO_DARK}
            />
            <Logout onClick={openModal}>Logout</Logout>
            <ReactModal 
           isOpen={modalIsOpen}
           style={customStyles}
           contentLabel="onRequestClose Example"
           onRequestClose={closeModal}
          //  className="Modal"
          //  overlayClassName="Overlay"
        >
          <PopupContainer>

          <Para>Are you sure you want to logout?</Para>
          <ButtonsContainer>
            <Button1 onClick={closeModal}>Cancel</Button1>
            <Button1 className="confirm" onClick={handleLogout}>Confirm</Button1>
          </ButtonsContainer>
          {/* <button onClick={closeModal}>Close Modal</button> */}
          </PopupContainer>
        </ReactModal>
          </RightContainer>
        </Header>
      </>
    );
  })
);

export default TopNavBar;
