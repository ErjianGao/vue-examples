// 类似于router下的index.js
import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";
import { AUTHORIZATION } from "@/store/types";

axios.defaults.baseURL = "/api";

axios.interceptors.request.use(
  req => {
    console.log("发出请求");
    // session storage 是登录时设置的，现在将其放到请求的headers中
    let auth = sessionStorage.getItem(AUTHORIZATION);
    let role = sessionStorage.getItem("role");
    // 在请求头添加authorization
    if (auth != null) {
      console.log(auth);
      // 注意这里是headers
      req.headers[AUTHORIZATION] = auth;
      req.headers["role"] = role;
    }
    return req;
  },
  error => {
    // 请求的错误，Promise 有两个参数 [resolve, reject]
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  // 返回200
  resp => {
    return resp;
  },
  // 全局异常处理
  error => {
    console.log("响应异常");
    console.log(error);
    // 拿到错误的响应
    let resp = error.response;
    if (resp) {
      // 其实没必要写，因为只需要返回异常信息就足矣
      // switch (resp.status) {
      //   case 401:
      //     // 单独处理
      //     break;
      // }
      store.commit(GET_EXCEPTION, { message: resp.data.message });
    }
    // 异常统一弹出解决，并且停止执行
    // return Promise.resolve();
  }
);

// 将对象暴露出去
export default axios;
