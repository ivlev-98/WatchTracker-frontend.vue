import axios, { AxiosError } from "axios";
import store from "@/store";
import router from "@/router";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000',
  headers: {
    "Accept": "application/json"
  }
});

instance.interceptors.response.use(res => res, error => {
  if(error.code === AxiosError.ERR_NETWORK)
    store.commit('error', 'Ошибка соединения')
  if(error.response.status === 401 || error.response.status === 419) {
    store.dispatch('user/logout');
    router.push({name: 'login'});
    store.commit('error', 'Вы не авторизованы')
  }
  return Promise.reject(error);
});

export default instance;