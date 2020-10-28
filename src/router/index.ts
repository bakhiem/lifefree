import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tat-ca-bai-viet",
    name: "list-post",
    component: () => import("@/views/Post.vue")
  },
  {
    path: "/dang-bai",
    name: "post",
    component: () => import("@/views/CreatePost.vue")
  },
  {
    path: "/ve-chung-toi",
    name: "about-us",
    component: () => import("@/views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
