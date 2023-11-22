import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress, { settings } from "nprogress";
import { useOverlayStore } from "@/store/overlay";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/plans",
        name: "Plans",
        component: () => import("@/views/Plans.vue"),
      },
      {
        path: "/help",
        name: "Help",
        component: () => import("@/views/Help.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  const overlayStore = useOverlayStore();

  overlayStore.showOverlay();
  next();
});

router.afterEach(() => {
  const overlayStore = useOverlayStore();

  overlayStore.hideOverlay();
  NProgress.done();
});

export default router;
