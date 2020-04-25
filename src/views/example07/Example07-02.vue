<template>
  <div>
    <h1>homeworks</h1>
    <ul>
      <li v-for="(h, index) in homeworks" :key="index">
        <!-- 注意这里要对to进行数据绑定，动态切换to属性的值 -->
        <router-link :to="`/homeworks/${h.id}`">{{ h.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { LIST_HOMEWORKS } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  // 调用 绑定
  created() {
    // 发送异步请求
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>

<style scoped>
ul {
  margin-top: 20px;
  margin-left: 30px;
}

ul > li {
  margin-left: 10px;
}
</style>
