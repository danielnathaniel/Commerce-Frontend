import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import env from "react-dotenv";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("auth", env.AUTH0DOMAIN, env.AUTH0CLIENTID);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={env.AUTH0DOMAIN}
      clientId={env.AUTH0CLIENTID}
      redirectUri={window.location.origin}
      audience={env.AUTH0AUDIENCE}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
