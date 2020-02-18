import axios from "axios";
import UserService from "./UserService";

const configure = () => {
  axios.interceptors.request.use((config) => {
    const cb = () => {
      config.headers.Authorization = `Bearer ${UserService.getToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  });
};

export default {
  configure,
}
