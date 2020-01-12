import Vue from "vue";
import Vuex from "vuex";
import {db} from "./main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    user(state){
      return state.user
    },
    userType(state){
      return state.user.data.userType
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        db.collection(user.email).doc("type").get().then(function (doc) {
          commit("SET_USER", {
            displayName: user.displayName,
            email: user.email,
            userType: doc.data()['type']
          });
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
