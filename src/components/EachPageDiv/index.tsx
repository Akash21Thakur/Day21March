import { NavLink } from "react-router-dom";
import { EachPageCont, IconTextDiv } from "./styleComponent";

const EachPageDiv = () => {
  return (
    <>
      <EachPageCont>
        <NavLink to="/" className='navlink'>
          <IconTextDiv className="navlink">
            <i className="fa-solid fa-house"></i>
            <div className="text">Home</div>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/trending" className='navlink'>
          <IconTextDiv>
            <i className="fa-solid fa-fire-flame-curved"></i>
            <div className="text">Trending</div>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/gaming" className='navlink'>
          <IconTextDiv>
            <i className="fa-solid fa-gamepad"></i>
            <div className="text">Gaming</div>
          </IconTextDiv>
        </NavLink>
        <NavLink to="/saved-videos" className='navlink'>
          <IconTextDiv>
            <i className="fa-solid fa-list-check"></i>
            <div className="text">Saved Videos</div>
          </IconTextDiv>
        </NavLink>
      </EachPageCont>
    </>
  );
};

export default EachPageDiv;
