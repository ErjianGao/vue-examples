// 类似于router下的index.js
import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";

axios.defaults.baseURL = "/api";

axios.interceptors.request.use(
  req => {
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
    // 拿到错误的响应
    let resp = error.response;
    if (resp) {
      // 其实没必要写，因为只需要返回异常信息就足矣
      switch (resp.status) {
        case 401:
          // 单独处理
          break;
      }
      store.commit(GET_EXCEPTION, { message: resp.data.message });
    }
    // 异常统一弹出解决，因此不再返回Promise reject，直接结束
    return Promise.resolve();
  }
);

// 将对象暴露出去
export default axios;
