import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Auth0Provider} from "@auth0/auth0-react";
// import env from "react-dotenv";
// import {
//   transitions,
//   positions,
//   Provider as AlertProvider,
// } from "@blaumaus/react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: "30px",
//   // you can also just use 'scale'
//   transition: transitions.SCALE,
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0DOMAIN}
    clientId={process.env.REACT_APP_AUTH0CLIENTID}
    redirectUri={window.location.origin}
    audience={process.env.REACT_APP_AUTH0AUDIENCE}
    cacheLocation={"localstorage"}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
