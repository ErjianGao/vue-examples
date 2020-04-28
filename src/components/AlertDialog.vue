// 使用ui框架
<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  watch: {
    // 监听exp的变化
    exp() {
      // 输出对象中的属性
      alert(`${this.exp.message}`);
    },
    msg() {
      alert(`${this.msg}`);
    }
  },
  computed: {
    // 在内部自己声明计算属性，方便操作
    ...mapState({ exp: state => state.exception }),
    ...mapState({ msg: state => state.message })
  }
};
</script>
