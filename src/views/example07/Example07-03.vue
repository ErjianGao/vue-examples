<template>
  <div>
    <h1>{{ homework.name }}</h1>
  </div>
</template>

<script>
import { GET_HOMEWORK } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  // data: () => ({
  //   homework: {
  //     name: null
  //   }
  // }),
  created() {
    console.log(this.hid);
    // 发送一个异步事件请求，同时带一个对象过去
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid });
    console.log(2);
  },
  // created() {
  //   // 发送一个异步事件请求，同时带一个对象过去
  //   this.$store.dispatch(GET_HOMEWORK, { hid: this.hid }).then(h => {
  //     this.homework = h;
  //   });
  // },
  computed: {
    ...mapState(["homework"])
  }
};
</script>
