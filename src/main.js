import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAfQlCWdQAJ6gSwJ4QTvcvshPk5r5ZVtBI",
  authDomain: "injur-a4668.firebaseapp.com",
  databaseURL: "https://injur-a4668.firebaseio.com",
  projectId: "injur-a4668",
  storageBucket: "injur-a4668.appspot.com",
  messagingSenderId: "182902241239",
  appId: "1:182902241239:web:249f7232610215988dfd92"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
