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
  if (to.meta.requireAuth) {
    // This route requires authentication
    // Implement your authentication logic here
    // For example, check if the user is logged in and has a valid session
    if (localStorage.getItem("name")) {
      next(); // Proceed to the requested route
    } else {
      next("/login"); // Redirect to the login route
    }
  } else {
    next(); // No authentication required, proceed to the requested route
  }
});

export default router;
