import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/index.js";
import { updateRoutes } from "@/router/index";

Vue.use(Vuex);

const myState = {
  message: "",
  exception: {},
  name: null,
  role: null,
  user: {
    name: "bo",
    address: "956"
  },
  homeworks: [],
  homework: {},
  isLogin: false
};

// 同步事件
const myMutations = {
  // 声明了一个事件，不是方法，使用字符串进行定义，当向事件发送信息时激活事件，自动注入state，与参数
  [types.UPDATE_USER](state, data) {
    state.user = data;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  [types.GET_HOMEWORK](state, data) {
    // console.log(data);
    state.homework = data;
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  name(state, data) {
    console.log(data);

    state.name = data;
  },
  welcome(state, data) {
    state.role = data;
  },
  admin(state, data) {
    state.message = data;
  }
};

// commit是对象，支持异步更新，但仍需调用同步事件更新state
const myActions = {
  [types.UPDATE_USER]({ commit }, data) {
    setTimeout(() => {
      // 内部仍需通过同步更新state
      commit(types.UPDATE_USER, data);
    }, 2000);
  },
  // 声明为支持异步的事件
  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get("/homeworks");
    // 更新到state
    commit(types.LIST_HOMEWORKS, resp.data.homeworks);
  },

  async [types.GET_HOMEWORK]({ commit }, data) {
    console.log(data.hid);
    // 模板字符串可以拿到变量
    let resp = await axios.get(`/example10/homeworks/${data.hid}`);
    console.log(resp);

    // 更新到state
    commit(types.GET_HOMEWORK, resp.data.homework);
    // console.log(myState.homework);
  },
  // async [types.GET_HOMEWORK]({ commit }, data) {
  //   // 模板字符串可以拿到变量
  //   let resp = await axios.get(`/homeworks/${data.hid}`);
  //   // 当成功时，给异步组件返回一个Promise
  //   return new Promise.resolve(resp.data.homeworks);
  // }

  // async [types.LOGIN]({ commit }, data) {
  //   // 如果失败的话resp拿不到任何结果
  //   let resp = await axios.post("/login", {
  //     userName: data.userName,
  //     password: data.password
  //   });
  // }

  // 登录，并添加sessionStorage
  async [types.LOGIN]({ commit }, data) {
    console.log("store");
    console.log(data);

    let resp = await axios.post("login", data);
    console.log(resp);

    if (resp != null) {
      // 直接放到sessionStorage
      sessionStorage.setItem(
        types.AUTHORIZATION,
        resp.headers[types.AUTHORIZATION]
      );
      sessionStorage.setItem("role", resp.data.role);
      // 更新路由
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },
  async index({ commit }, data) {
    console.log("store");

    let resp = await axios.get("index");
    console.log(resp);

    commit("name", resp.data.name);
  },
  async welcome({ commit }, data) {
    console.log("store");

    let resp = await axios.get("welcome");
    commit("welcome", resp.data.role);
  },
  async admin({ commit }, data) {
    let resp = await axios.get("/admin");
    console.log(resp);
    commit("admin", resp.data.msg);
  }
};

export default new Vuex.Store({
  // 全局数据
  state: myState,
  // 同步事件
  mutations: myMutations,
  // 异步事件
  actions: myActions,
  // 多个模块的vuex文件整合
  modules: {}
});

// 需要进行判断是否登录
if (sessionStorage.getItem(types.AUTHORIZATION) != null) {
  myState.isLogin = true;
}
