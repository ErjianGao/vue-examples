import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/index.js";

Vue.use(Vuex);

const myState = {
  exception: {},
  user: {
    name: "bo",
    address: "956"
  },
  homeworks: [],
  homework: {}
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
    console.log(data);
    state.homework = data;
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
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
    let resp = await axios.get(`/homeworks/${data.hid}`);
    console.log(resp.data.homework);
    console.log(types.GET_HOMEWORK);

    // 更新到state
    commit(types.GET_HOMEWORK, resp.data.homework);
    console.log(myState.homework);
  },
  // async [types.GET_HOMEWORK]({ commit }, data) {
  //   // 模板字符串可以拿到变量
  //   let resp = await axios.get(`/homeworks/${data.hid}`);
  //   // 当成功时，给异步组件返回一个Promise
  //   return new Promise.resolve(resp.data.homeworks);
  // }

  async [types.LOGIN]({ commit }, data) {
    // 如果失败的话resp拿不到任何结果
    let resp = await axios.post("/login", {
      userName: data.userName,
      password: data.password
    });
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
