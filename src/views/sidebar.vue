<template>
  <div>
    <h1>vue 实例</h1>
    <ul>
      <!-- 路由的路径，在index.js中找到对应的组件进行渲染，渲染到根节点的指定位置router-view -->
      <li><router-link to="/example01">example01</router-link></li>
      <li><router-link to="/example02">example02</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
