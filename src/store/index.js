import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";

Vue.use(Vuex);

const myState = {
  user: {
    name: "bo",
    address: "956"
  }
};

// 同步事件
const myMutations = {
  // 声明了一个事件，不是方法，使用字符串进行定义，当向事件发送信息时激活事件，自动注入state，与参数
  [types.UPDATE_USER](state, data) {
    state.user = data;
  }
};

// commit是对象，支持异步更新，但仍需调用同步事件更新state
const myActions = {
  [types.UPDATE_USER]({ commit }, data) {
    setTimeout(() => {
      // 内部仍需通过同步更新state
      commit(types.UPDATE_USER, data);
    }, 2000);
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
