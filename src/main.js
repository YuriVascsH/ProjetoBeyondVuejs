// Codigo novo
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6MZUUXYJT2eG3lKwk386nSOXg4vOctNk",
  authDomain: "projetofirebase-f5ab1.firebaseapp.com",
  projectId: "projetofirebase-f5ab1",
  storageBucket: "projetofirebase-f5ab1.appspot.com",
  messagingSenderId: "857335660599",
  appId: "1:857335660599:web:5d19e0192348e27d9b3fb2",
  measurementId: "G-12B6E7WGDR",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
//fim codigo novo


import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";
import {
  createUserWithEmailAndPassword,
  signInWithemailAndPassword,
} from "firebase/auth";
import Vuetify from "vuetify/lib";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    create({ commit }, payload) {
      const { email, password } = payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("Usuário criado", result);
        })
        .catch((error) => {
          alert(error);
        });
    },
    login({ commit }, payload) {
      const { email, password } = payload;
      signInWithemailAndPassword(auth, email, password)
        .then((result) => {
          console.log("Usuário logado!", result);
          commit("setUser", result.user);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
