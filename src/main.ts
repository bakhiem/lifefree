import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import '@/styles/index.scss'
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBDVug86FokaoTRD1QfdWnmMU6xsFjBxOg",
  authDomain: "life-free-7e15c.firebaseapp.com",
  databaseURL: "https://life-free-7e15c.firebaseio.com",
  projectId: "life-free-7e15c",
  storageBucket: "life-free-7e15c.appspot.com",
  messagingSenderId: "772468247223",
  appId: "1:772468247223:web:7abd7314c0e661ababdb32",
  measurementId: "G-YEEXZW2K02"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
