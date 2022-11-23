import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => {
        loginWithRedirect();
        console.log("loginwredirect:", loginWithRedirect);
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;

//https://auth0.com/docs/quickstart/spa/react/01-login#install-the-auth0-react-sdk - used this link to create this button
