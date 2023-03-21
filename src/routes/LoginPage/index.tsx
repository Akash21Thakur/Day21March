import React, { useEffect, useState } from "react";
import { DARK_THEME_LOGO, LIGHT_THEME_LOGO } from "../../constants/logos";
import { ErrorMessage, LoginForm } from "./styleComponent";
import { Navigate, useNavigate } from "react-router";

// import {redirect} from 'react-router-dom';
import { LOGIN_API_URL } from "../../constants/api_url";
import Cookies from "js-cookie";
import { inject, observer } from "mobx-react";
import ThemeStore from "../../stores/themeStore";
// import Cookies from "js-cookie";
interface Props{}
interface InjectedProps extends Props {
  themeStore: ThemeStore
}


const LoginPage = inject('themeStore')(observer((props : any) => {
  const [userDetails, setDetails] = useState({
    username: "",
    password: "",
  });

  const [loginFailure,setLoginFailure]=useState({
    errorStatus: false,
    error_msg: ''
  });

 

  const [show, showPassword] = useState<boolean>(false);
  // const show=true;

  const {themeStore} =  props as InjectedProps;
 
  const navigate=useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // console.log(props);
    
    
    
    const option = {
        method: 'POST',
        
        body: JSON.stringify(userDetails),
    };
    
    try{
        
        const response = await fetch(LOGIN_API_URL, option);
        const data = await response.json();
        
        // console.log(response);
        
        if(response.ok===true){
            Cookies.set('jwt_token',data.jwt_token,{expires: 30})
            navigate('/');
            // handleSuccessLogin();
        }else{
            setLoginFailure({
                errorStatus: true,
                error_msg: data.error_msg
            });
            console.log(data)
        }

    }

    catch(error:any){
        console.error(error)
        console.log('akashqq')
    }

    // setDetails({
    //     userName:'',
    //     password:''
    // })
  };

  const handleTogglePassword = () => {
    showPassword(!show);
  };

  const handlePassword = (event: any) => {
    setDetails((currState) => ({
      ...currState,
      password: event.target.value,
    }));
  };

  const handleUsername = (event: any) => {
    setDetails((currState) => ({
      ...currState,
      username: event.target.value,
    }));
  };

  const jwtToken = Cookies.get('jwt_token');
  if(jwtToken!==undefined){
    return <Navigate to='/'/>
  }

  //    useEffect(()=>{
  //     console.log(userDetails)
  //    })

  return (
    <>
      <LoginForm>
        <div className="login-div">
        <img src={themeStore.isDark ? DARK_THEME_LOGO : LIGHT_THEME_LOGO} />
          <form onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <br />
            <input
              value={userDetails.username}
              type="text"
              onChange={handleUsername}
            />
            <br />
            <label>PASSWORD</label>
            <br />
            <input
              value={userDetails.password}
              type={show ? "text" : "password"}
              onChange={handlePassword}
            />

            <div className="show-password-div">
              <input
                className="checkbox"
                type="checkbox"
                onChange={handleTogglePassword}
              />
              <label>Show Password</label>
            </div>
            <button type="submit">Login</button>
            {
                loginFailure.errorStatus &&
            <ErrorMessage>
                *{loginFailure.error_msg}
            </ErrorMessage>
            }
          </form>
        </div>
      </LoginForm>
    </>
  );
}))

export default LoginPage;

