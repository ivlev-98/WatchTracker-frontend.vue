import { createStore } from 'vuex';
import { Alert, AlertTypes } from './types';

export default createStore({
  state: {
    alerts: Array<Alert>()
  },
  mutations: {
    error(state, messages: Array<string>) {
      state.alerts.unshift({type: AlertTypes.error, messages});
    },
    success(state, messages: Array<string>) {
      state.alerts.unshift({type: AlertTypes.success, messages});
    },
    dropAlert(state, idx: number) {
      state.alerts.splice(idx, 1);
    }
  }
})
