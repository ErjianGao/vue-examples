// 类似于router下的index.js
import axios from "axios";

axios.defaults.baseURL = "/api";

// 将对象暴露出去
export default axios;
