import axios from "axios";

const request = axios.create({
  // withCredentials: true, //解决跨域问题！！！
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 60000,
});

export default request;
