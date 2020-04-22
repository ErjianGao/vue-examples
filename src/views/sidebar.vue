<template>
  <div>
    <h1>vue 实例</h1>
    <ul>
      <!-- 路由的路径，在index.js中找到对应的组件进行渲染，渲染到根节点的指定位置router-view -->
      <li><router-link to="/example01">example01</router-link></li>
      <li><router-link to="/example02">example02</router-link></li>
      <li>
        路由传参
        <ul>
          <li>
            <router-link to="/example03/students/12/homeworks/1">
              sid:12; hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/74/homeworks/2">
              sid:74; hid:2
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
ul {
  margin-top: 20px;
  margin-left: 30px;
}
ul ul {
  margin-top: 00px;
}
ul > li {
  margin-left: 10px;
}
</style>
