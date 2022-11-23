const isRunningFrontEndLocally = "http://localhost:3000";
export const BASE_URL = isRunningFrontEndLocally
  ? "http://127.0.0.1:6060"
  : "needtoputbackendurlhere";

const addToCartOnServer = () => {};
//we can use any javascript to connect to backend which is calling an api - it does not need to be react specific to call and api from our react api
