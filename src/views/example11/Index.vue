<template>
  <div>
    <h1>登录后首页</h1>
    <router-link to="/example11-01/welcome">登录后显示</router-link>
    <p>
      {{ name }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("index");
  },
  computed: {
    ...mapState(["name"])
  }
};
</script>
