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
  }
];

const router = new VueRouter({
  // 基于参数创建
  routes
});

// 对外暴露对象，当外界import时，将router对象返回
export default router;
