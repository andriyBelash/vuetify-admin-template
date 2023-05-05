import { createWebHistory, createRouter } from "vue-router";
// import Test from "./components/Test";
// route title placed on top of page ( card title )

const routes =  [
  {
    path: '/login',
    component: () => import('../layouts/LayoutLogin.vue'),
  },
  {
    component: ()=> import("../layouts/LayoutDefault.vue"),
    children: [
      {
        path: "/users",
        name: "users",
        component: () => import('../views/Users.vue'),
        meta: { roles: ['admin'], title: "Пользователи" }
      },
      {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue'),
        meta: { roles: ['admin'], title: "Головна" }
      },
      {
        path: "/data-table",
        name: "data-table",
        component: () => import('../views/DataTable.vue'),
        meta: { roles: ['admin'], title: "Таблиця" }
      },
      {
        path: "/:catchAll(.*)",
        meta: { layout: 'empty' },
        component: () => import("../components/default/AppNotFound.vue"),
      },
    ]
  },


];




const router = createRouter({
  history: createWebHistory('/admin'),
  routes,
});



export default router;
