import { NavLink } from "react-router-dom";
import { EachPageCont, Icon, IconTextDiv, PageName } from "./styleComponent";

const EachPageDiv = () => {
  return (
    <>
      <EachPageCont>
        <NavLink to="/" className='navlink'>
          <IconTextDiv className="navlink">
            <Icon className="fa-solid fa-house" />
            <PageName className="text">Home</PageName>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/trending" className='navlink'>
          <IconTextDiv>
            <Icon className="fa-solid fa-fire-flame-curved"/>
            <PageName className="text">Trending</PageName>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/gaming" className='navlink'>
          <IconTextDiv>
            <Icon className="fa-solid fa-gamepad"/>
            <PageName className="text">Gaming</PageName>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/saved-videos" className='navlink'>
          <IconTextDiv>
            <Icon className="fa-solid fa-list-check"/>
            <PageName className="text">Saved Videos</PageName>
          </IconTextDiv>
        </NavLink>
      </EachPageCont>
    </>
  );
};

export default EachPageDiv;
