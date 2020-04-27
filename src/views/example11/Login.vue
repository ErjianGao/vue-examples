<template>
  <div>
    <h1>登录</h1>
    <form ref="form">
      用户名：
      <input type="text" v-model="user.userName" />
      <br />
      密码：
      <input type="password" v-model="user.password" />
      <br />
      <button type="button" @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/types.js";
export default {
  data: () => ({
    user: {
      userName: null,
      password: null
    }
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        user: this.user
      });
      // 初始化，初始化的值由data决定
      this.$refs.form.reset();
    }
  }
};
</script>
