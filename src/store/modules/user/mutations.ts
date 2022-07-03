import { MutationTree } from "vuex";
import { User, UserState } from "./types";

export const mutations: MutationTree<UserState> = {
  loginError(state, errors) {
    state.loginErrors = errors;
  },
  login(state, user: User) {
    state.user = user;
    state.auth = true;
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('auth', 'true');
  },
  logout(state) {
    state.user = undefined;
    state.auth = false;
    localStorage.removeItem('user');
    sessionStorage.removeItem('auth');
  },
  tryAuth(state) {
    if(localStorage.getItem('user')) {
      let user = localStorage.getItem('user') ?? '';
      state.user = JSON.parse(user);
      state.auth = true;
      sessionStorage.setItem('auth', 'true');
    }
  }
}