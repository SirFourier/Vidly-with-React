import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  // Unexpected errors (network down, server down, db down, bug)
  // log - them
  // Display a generic and friendly error message
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  // Only set x-auth-token if it exists (as in the client is logged in)
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
