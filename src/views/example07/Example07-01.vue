<template>
  <div>
    <h1>Axios基本请求</h1>
    <p>
      基本get请求测试
      <br />
      <button type="button" @click="getUser">get user</button>
    </p>
    <p>
      匹配表达式测试
      <br />
      <button type="button" @click="getHomework">get homework</button>
    </p>
    <p>{{ user.userId }} / {{ user.userName }}</p>
    <hr />
    <p>
      post请求测试
      <br />
      <button type="button" @click="login">login</button>
    </p>
  </div>
</template>

<script>
// axios不应该在层中出现，应该在应用引擎中出现，此时只是演示
import axios from "@/axios/index.js";
export default {
  data: () => ({
    user: {
      userName: null,
      userId: null
    }
  }),
  methods: {
    // getUser() {
    //   // 将结果封装到Promise对象中，返回Promise对象，对象有then方法回调函数，get执行完执行then
    //   axios.get("/users/1").then(resp => {
    //     console.log(resp);
    //     // 返回的json数据在data中
    //     this.user = resp.data.user;
    //     // 出现异常时catch
    //   });
    // }

    // 声明异步关键词，写法类似于同步，但是执行的时候依旧是异步
    // 比写回调请求更优雅
    async getUser() {
      // 直接就把promise的结果拿回了
      let resp = await axios.get("/users/1");
      // 如果按照正常的理解这么写不行，但是如果加了await关键词，那么直到结果回来之后才继续执行
      this.user = resp.data.user;
    },
    async getHomework() {
      let resp = await axios.get("/users/1/homework/12");
      this.user = resp.data.user;
    },
    login() {
      axios
        .post("/login", {
          user: {
            userName: "BO",
            userId: "1"
          }
        })
        .then(resp => {
          console.log(resp.headers["Authorization"]);
          this.user = resp.data.user;
        });
    }
  }
};
</script>
