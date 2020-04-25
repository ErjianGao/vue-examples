<template>
  <div id="app">
    <!-- 自动创建标签 -->
    <sidebar id="sidebar" />
    <!-- 添加 -->
    <!-- <keep-alive> -->
    <!-- 渲染匹配到的试图组件 -->
    <router-view id="router" :key="$route.path" />
    <!-- </keep-alive> -->
    <alertdialog />
  </div>
</template>

<!-- 把另一个组件引入 -->
<script>
// 声明组件
import sidebar from "@/views/Sidebar";
export default {
  // sidebar非延迟加载，altertdialog为延迟加载
  components: {
    sidebar,
    alertdialog: () => import("@/components/AlertDialog.vue")
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* vue的组件直接使用是不可以的，因为不是html原生的标签 */
/* sidebar {
  width: 300px;
  display: inline-block;
} */

#app {
  margin-top: 10px;
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
}
#router {
  border: 1px solid red;
  flex: 1;
}
</style>
