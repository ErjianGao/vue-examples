<template>
  <div id="app">
    <!-- 自动创建标签 -->
    <sidebar id="sidebar" />
    <!-- 渲染匹配到的试图组件 -->
    <router-view id="router-view" />
  </div>
</template>

<!-- 把另一个组件引入 -->
<script>
// 声明组件
import sidebar from "@/views/sidebar";
export default {
  // 非延迟加载
  components: { sidebar }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 20px;
}

/* vue的组件直接使用是不可以的，因为不是html原生的标签 */
/* sidebar {
  width: 300px;
  display: inline-block;
} */

#sidebar {
  width: 300px;
  display: inline-block;
  border: 1px solid red;
  vertical-align: top;
}

#router-view {
  display: inline-block;
  border: 1px solid red;
}
</style>
