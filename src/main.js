// 全局注册
// 当做模块引入
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// // 只有当开发环境时才会import mock模块，
// if (process.env.NODE_ENV == "development") {
//   import("@/mock/index.js");
// }

Vue.config.productionTip = false;

// 创建一个对象，同时注入对象，并挂载到根节点
new Vue({
  router,
  store,
  render: h => h(App) // 渲染app.vue，只有根组件需要注册
}).$mount("#app"); // 挂载到index.html中的body
