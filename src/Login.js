import React from "react";
import { Button } from "@material-ui/core";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import photo from "./img/png-transparent-whatsapp-android-computer-icons-messaging-apps-whatsapp.png"
import "./Login.css";
import { auth } from "firebase";

function Login() {
    const signIn = () => {};
    return (
        <div className="login">
            <div className="login__container">
                <WhatsAppIcon style={{width: '300px'}}/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
