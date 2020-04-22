<!-- 使用模板语法，自动计算出最少需要重新渲染的组件，减少dom操作次数 -->
<template>
  <div>
    <!-- 当显示逻辑过于复杂时使用计算属性进行显示 -->
    <p>{{ isShow ? "为true显示" : "为false显示" }}</p>
    <p>{{ msg }}</p>
    <!-- 模板上不能声明this -->
    <p>{{ user.name }} / {{ myReplace(user.insertTime) }}</p>
    <button @click="changed">change name</button>
    <p>地址：{{ user.address }}</p>
    <button @click="addAddress">add address</button>
  </div>
</template>

<script>
// 对外暴露vue对象，默认继承自vue
export default {
  // 小括号加大括号直接就是返回的结果
  // 属性是一个函数
  data: () => ({
    isShow: false,
    msg: "afa",
    user: {
      name: "bo",
      insertTime: "2020T08",
      address: null
    }
  }),
  // 属性是一个方法
  methods: {
    changed() {
      this.user.name = "gao";
    },
    addAddress() {
      this.user.address = "956";
    }
  },
  // 属性是一个方法
  computed: {
    // 获取属性计算的结果，replace是一个属性，只是属性getter方法的简写
    replace() {
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      // 返回值是一个函数
      return date => date.replace("T", " ");
    }
  }
};
</script>
