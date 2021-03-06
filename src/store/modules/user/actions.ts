import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { UserState } from "./types";
import axios from "@/axios";
import router from "@/router";
import { AxiosError } from "axios";

export const actions: ActionTree<UserState, RootState> = {
    async login({commit}, credentials) {
      try {
        await axios.get('/sanctum/csrf-cookie');
        let res = await axios.post('/api/login', credentials);
        if(res.data?.user) {
          commit('login', res.data.user);
          commit('success', 'Вы успешно авторизованы', {root: true})
          router.push({name: 'home'})
        }
      }catch(e) {
        console.log(e);
        if(e instanceof AxiosError) {
          if(e.code === AxiosError.ERR_BAD_REQUEST && e.response?.data?.errors)
            commit('loginError', e.response.data.errors)
        }
      }
    },
    async register({commit}, user) {
      try {
        await axios.get('/sanctum/csrf-cookie');
        let res = await axios.post('/api/register', user);
        if(res.data?.user) {
          commit('login', res.data.user);
          commit('success', 'Вы успешно зарегистрированы', {root: true})
          router.push({name: 'home'})
        }
      }catch(e) {
        console.log(e);
        if(e instanceof AxiosError) {
          if(e.code === AxiosError.ERR_BAD_REQUEST && e.response?.data?.errors)
            commit('registerError', e.response.data.errors)
        }
      }
    },
    async logout({ commit }) {
      try {
        await axios.get('/api/logout');
        commit('logout');
      }catch(e) {
        console.log(e);
      }
    }
}