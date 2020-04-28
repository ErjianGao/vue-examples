<template>
  <div>
    <h1>用户登录</h1>
    <form ref="form">
      用户名：
      <input type="text" v-model="identityNo" />
      <br />
      密码：
      <input type="password" v-model="password" />
      <br />
      <button @click="login" type="button">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/types.js";
export default {
  data: () => ({
    identityNo: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        identityNo: this.identityNo,
        password: this.password
      });
      this.$refs.form.reset();
    }
  }
};
</script>
