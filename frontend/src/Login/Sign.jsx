import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index2.css";
import img4 from "./img4.png";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";



export default function Sign() {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
            return;
        }
    };

    const containerClass =
        "container2 " + (type === "signUp" ? "right-panel-active" : "");
    return (

        <div className="App body">
            <div className={containerClass} id="container2">
                <SignUpForm />
                <SignInForm />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <div className="ex">
                                <img src={img4} alt=" " width="100%" />
                                <div className="ex2">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please sign in with your personal info</p>
                                    <button
                                        className="ghost"
                                        id="signIn"
                                        onClick={() => handleOnClick("signIn")}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <div className="ex">
                                <img src={img4} alt=" " width="100%" />
                                <div className="ex2">
                                    <h1>New Here?</h1>
                                    <p>Register your new account and get great connections</p>
                                    <button
                                        className="ghost "
                                        id="signUp"
                                        onClick={() => handleOnClick("signUp")}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} /> {/* Define the route to ForgotPassword */}
            {/* </Routes>  */}

        </div>

    );
}
