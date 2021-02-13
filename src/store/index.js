import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // const store = new Vuex.Store({
  state: {
    user: {
      authenticated: false,
      data: {
        username: '',
        email: '',
      },

    },
  },
  getters: {
    user(state) {
      return state.user.data;
    },
    authenticated(state) {
      return state.user.authenticated;
    },
  },
  mutations: {
    modifyCurrentUser(state, email) {
      state.user.authenticated = true;
      state.user.data.email = email;
    },
    clearUser(state) {
      state.user.authenticated = false;
      state.user.data = null;
    },
  },
  actions: {
  },
  modules: {
  },
});

// export default store;
