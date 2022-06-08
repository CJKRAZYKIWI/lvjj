import axios from "axios";
import authHeader from "./auth-header";
// const API_URL = "http://localhost:8080/api/test/";
const API_URL = "api/";

const getReviews = () => {
  return axios.get(API_URL + "reviews", { headers: authHeader() });
};

export default {
  getReviews
};