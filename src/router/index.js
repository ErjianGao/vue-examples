import Vue from "vue";
import VueRouter from "vue-router";

// 引入vueRouter
Vue.use(VueRouter);

// 路由的规则
const routes = [
  {
    // 路径为根的时候加载某个组件，此时为非延迟加载
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    // 允许把路由的参数进行值传递
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    path: "/example04-03",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    path: "/example06-03",
    component: () => import("@/views/example06/Example06-03.vue")
  },
  {
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  }
];

const router = new VueRouter({
  // 基于参数创建
  routes
});

// 对外暴露对象，当外界import时，将router对象返回
export default router;
