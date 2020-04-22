<template>
  <div>
    <h1>v-text</h1>
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <!-- 如果true，则显示p，如果为false则不进行渲染 -->
    <p v-if="user.level == 'admin'">此内容仅admin可见</p>

    <template v-if="userNameLogin">
      <p>第1个input会被复用，输入的信息切换时会保存，应该加入一个key</p>
      <input placeholder="Enter your username" key="key1" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" key="key2" />
    </template>

    <br />
    <button v-on:click="changeInput">切换</button>
    <h1>v-show</h1>
    <!-- 只是display为none，用户可以看到源码 -->
    <p v-show="close">此内容仅close为true可见</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    admin: true,
    userNameLogin: true,
    user: { username: "BO", level: "admin" },
    close: true
  }),
  methods: {
    changeInput() {
      this.userNameLogin = !this.userNameLogin;
    }
  }
};
</script>
