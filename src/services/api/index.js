import axios from "axios";
import { config } from "../../store/utils/apiConstant.js";
import { store } from "../../store/index.js";

export const Api = async (method, endPoint, data) => {
  const token = store.getState().signInSlice.user.accessToken;    
  const obj = {
    baseURL: `${config.baseURL}${endPoint}`,
    method: method,
    headers: token ? { Authorization: `Bearer ${token}` } : null,
    data: data,
  };
  try {
    const apiResponse = await axios(obj);
    return apiResponse;
  } catch (err) {
    if (err?.response?.status === 401) {
      setTimeout(() => {
        localStorage.clear();
        window.location.href = window.location.href
          .split("#")[0]
          .concat("#/signin");
        window.location.reload();
      }, 1000);
    }
    return err;
  }
};
