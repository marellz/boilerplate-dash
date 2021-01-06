import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

function page(path) {
  return () => import(`../views/${path}.vue`);
}

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      breadcrumbs: [],
    },
  },
  {
    path: "/about",
    component: page("About"),
    children: [
      {
        path: "",
        name: "about",
        component: page("AboutIndex"),
        meta: {
          breadcrumbs: [
            {
              text: "Us",
            },
          ],
        },
      },
      {
        path: "me",
        name: "me",
        component: page("AboutMe"),
        meta: {
          breadcrumbs: [
            {
              text: "Me",
            },
          ],
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
