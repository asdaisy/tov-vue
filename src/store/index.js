import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    token: null,
    userId: null,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId;
    },
  },
  getters: {
    token: (state) => state.token || '',
    userId: (state) => state.userId || 'default user',
  },
  actions: {
    async login({ commit }) {
      // 로그인 처리 및 상태 변경
      commit('SET_TOKEN', 'sample_token');
    },
  },
  modules: {
  },
});
