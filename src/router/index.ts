import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress, { settings } from "nprogress";
import { useOverlayStore } from "@/store/overlay";
import { useUserStore } from "@/store/user";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { auth: true },
      },
      {
        path: "/plans",
        name: "Plans",
        component: () => import("@/views/Plans.vue"),
        meta: { auth: true },
      },
      {
        path: "/help",
        name: "Help",
        component: () => import("@/views/Help.vue"),
        meta: { auth: true },
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/profile/:userHandle",
        name: "ProfileDetail",
        component: () => import("@/views/ProfileDetail.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
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
  const userStore = useUserStore();

  overlayStore.showOverlay();
  if (to.path === "/login" && userStore.isLoggedIn) {
    next({ path: "/" });
  }
  if (to.matched.some((record) => record.meta.auth) && !userStore.isLoggedIn) {
    // Redirect to the login page
    next({ name: "Login" });
  } else {
    next(); // Proceed as normal
  }
});

router.afterEach(() => {
  const overlayStore = useOverlayStore();

  overlayStore.hideOverlay();
  NProgress.done();
});

export default router;
