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
  },
  {
    props: true,
    path: "/homeworks",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/homeworks/:hid",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    path: "/example09-01",
    component: () => import("@/views/example09/Example09-01.vue")
  },
  {
    props: true,
    path: "/example10",
    component: () => import("@/views/example10/Example10-01.vue"),

    children: [
      {
        // 这里不能加 /
        path: "homeworks/:hid",
        components: {
          default: () => import("@/views/example10/Homework.vue"),
          subComponent: () => import("@/views/example10/SubComponent.vue")
        },
        props: { default: true, subComponent: true }
        // component: () => import("@/views/example10/Homework.vue")
      }
    ]
  },
  {
    path: "/example11-01",
    component: () => import("@/views/example11/Example11-01.vue")
  },
  {
    path: "/example12-01",
    component: () => import("@/views/example12/Example12-01.vue")
  }
];

const router = new VueRouter({
  // 基于参数创建
  routes
});
// 以上为没有角色要求的默认路由
// ==============================
// 后期追加的路由配置
let studentRouter = [
  {
    props: true,
    path: "/example11-01/welcome",
    component: () => import("@/views/example11/Welcome.vue")
  }
];

let teacherRouter = [
  {
    props: true,
    path: "/example11-01/welcome",
    component: () => import("@/views/example11/Welcome.vue")
  }
];

const teacherRole = "teacher";
const studentRole = "student";

// 暴露该方法，登录后，有vuex调用，通知更新路由信息
export function updateRoutes() {
  switch (sessionStorage.getItem("role")) {
    case teacherRole:
      // 添加路由
      router.addRoutes(teacherRouter);
      break;
    case studentRole:
      router.addRoutes(studentRouter);
      break;
  }
}

// 对外暴露对象，当外界import时，将router对象返回
export default router;

// 在文件模块加载时也执行
updateRoutes();
