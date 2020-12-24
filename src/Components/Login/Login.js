import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider"

function Login() {
// eslint-disable-next-line
  const [ {}, dispatch ] = useStateValue();  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          })
      } ) //console.log(result)
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG12.png" 
        alt=""/>
        <div className="login_text">
          <h1>Sign in to WhatsApp </h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
