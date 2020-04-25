<template>
  <div>
    <h1>Axios拦截器</h1>
    <p>当前用户名/密码：{{ userName }} / {{ password }}</p>
    <form>
      用户名
      <input type="text" v-model="userName" />
      <br />
      密码
      <input type="password" v-model="password" />
      <br />
      <button @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    userName: null,
    password: null
  }),
  methods: {
    login() {
      // 异步请求
      this.$store.dispatch(LOGIN, {
        userName: this.userName,
        password: this.password
      });
    }
  }
};
</script>
