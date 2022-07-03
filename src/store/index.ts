import { createStore } from 'vuex';
import { user } from '@/store/modules/user';
import { Alert, AlertTypes } from './types';

export default createStore({
  state: {
    alerts: Array<Alert>()
  },
  mutations: {
    error(state, message: string) {
      state.alerts.unshift({type: AlertTypes.error, message});
    },
    success(state, message: string) {
      state.alerts.unshift({type: AlertTypes.success, message});
    },
    dropAlert(state, idx: number) {
      state.alerts.splice(idx, 1);
    }
  },
  modules: {
    user
  }
})
