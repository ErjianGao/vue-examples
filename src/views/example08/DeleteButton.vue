<template>
  <div>
    <button @click="del">删除</button>
  </div>
</template>

<script>
export default {
  props: ["homework"],
  methods: {
    del() {
      // 确认框
      let r = confirm(`你确定删除${this.homework.name}吗？`);
      if (r) {
        alert(`${this.homework.name}作业已删除`);
      }
    }
  }
};
</script>
