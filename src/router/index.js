import LoginVue from "@/components/Authentication/Login.vue";
import MasterVue from "@/components/MainComponents/Master.vue";
import SingleProduct from "@/components/MainComponents/SingleProduct.vue";
import DashBoardVue from "@/components/UserComponents/DashBoard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Master",
    component: MasterVue,
    meta: { requireAuth: false },
  },
  {
    path: "/dashboard",
    name: "dash",
    component: DashBoardVue,
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
    meta: { requireAuth: false },
  },
  {
    path: "/product-detail/:id",
    name: "SingleProduct",
    component: SingleProduct,
    props: true,
    meta: { requireAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      console.log("true");
      return true;
    }
    return false;
  };

  if (to.matched.some((record) => record.meta.requireAuth)) {
    // Protected route
    if (isLoggedIn) {
      // User is logged in, allow access
      next();
    } else {
      // User is not logged in, redirect to the landing page
      next({ name: "Master" });
    }
  } else {
    // Non-protected route
    next();
  }
});

export default router;
