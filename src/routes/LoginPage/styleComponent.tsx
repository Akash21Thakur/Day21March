import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: grey; */
  height: 100vh;
  color: ${({theme}) => theme.color};

  .login-div {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    padding: 40px;
    width: 350px;
    height: 400px;
    border-radius: 16px;
    box-shadow: rgb(136 136 136) 0px 0px 42px -12px;
    /* background-color: white; */
  }

  img{
    width:200px;
    height:50px;
    margin-bottom: 30px;
  }

  form{
    width: 100%;
    
  }

  input{
    width: 100%;
    font-size: 30px;
    margin-bottom: 40px;
  }

  .checkbox{
    width: auto;
    padding:4px;
    cursor: pointer;
  }

  button {
    width: 100%;
    height: 36px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background-color: blue;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`

// export { LoginForm };
