import React, { Fragment, useEffect, useState } from "react";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginWithGG = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    window.sessionStorage.setItem("usernameGG", decoded.name);
    setIsLoggedIn(true);
    navigate("/home"); // Or redirect to the desired page after login
  };
  useEffect(() => {
    // Check for existing login state (optional, for persistence)
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    // Store user data in local storage (optional, for persistence)
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);
  console.log("user", userData);
  return (
    <Fragment>
      <div className="w-25 mx-auto mt-5 pt-5 loginGG flex justify-center items-center">
        <GoogleOAuthProvider clientId="209516062947-knrdrns0bfcu90kic8f0o58bofs354ha.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
            auto_select
          />
          ;
        </GoogleOAuthProvider>
      </div>
    </Fragment>
  );
};

export default LoginWithGG;
