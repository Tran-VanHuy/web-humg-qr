import axiosClient from "./axiosClient";

export const handleLoginApi = (email, password) => {

  return axiosClient.post(`https://qrhumg-api.herokuapp.com/register`, { email, password });
};
