import axios from "axios";

export const httpClient = params => {
  return axios.request({
    baseURL:
      process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com",
    ...params
  });
};
