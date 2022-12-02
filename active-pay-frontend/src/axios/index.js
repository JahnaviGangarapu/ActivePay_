import Axios from 'axios';

const axios = Axios.create({
  baseURL: "http://localhost:8082",
});

export default axios;
