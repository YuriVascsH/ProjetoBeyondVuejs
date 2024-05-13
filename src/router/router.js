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
     // Nova parte do código
    meta: {
      requiresAuth: true,
    },
    //fim da nova parte
  },

  {
    path: "/pop",
    component: pop,
  },
];

const router = new VueRouter({
  routes,
});

//Nova parte do código 

const getCurrentUser = () => {
  return new promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
    reject
  );
  })
};

router.beforeEach(async(to, from, next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await currentUser) {
      next();
    } else {
      alert("Você não tem acesso")
      next("/");
    }
  }
});
//fim dda nova parte

export default router;
