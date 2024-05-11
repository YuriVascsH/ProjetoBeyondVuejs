import home from "@/pages/home.vue";
import perfil from "@/pages/perfil.vue";
import calender from "@/pages/calender.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import pop from "@/pages/pop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: home,
  },

  {
    path: "/perfil",
    component: perfil,
  },

  {
    path: "/calender",
    component: calender,
  },

  {
    path: "/pop",
    component: pop,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
