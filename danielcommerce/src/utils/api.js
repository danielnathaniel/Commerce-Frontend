// const isRunningFrontEndLocally = "http://localhost:3000";
// export const BASE_URL = isRunningFrontEndLocally
//   ? "http://localhost:3000"
//   : "http://127.0.0.1:6060";
// console.log("urlapi", env);

export const BASE_URL = process.env.REACT_APP_BASE_URL;

//we can use any javascript to connect to backend which is calling an api - it does not need to be react specific to call and api from our react api
