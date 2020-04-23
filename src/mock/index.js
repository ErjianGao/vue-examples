import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// 所有的请求都是200ms
let mock = new MockAdapter(axios, { delayResponse: 200 });

// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/homeworks/{hid}
function path(p) {
  let reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}

// // (status, data, headers)
// mock.onGet("/users/1").reply(200, {
//   user: { userId: 1, userName: "bo" }
// });

// 地址，支持JS正则表达式
// 正则表达式中 /，由转义符，\/，替代
// 匹配任意字符，\w+；d匹配数字，s匹配字符串
// $，结束。避免匹配多个
// 等价于 /users/数字
// mock.onGet(/\/users\/\w+$/).reply(200, {
//   user: { userId: 2, userName: "SUN" }
// });

mock.onGet(path("/users/{p}")).reply(200, {
  user: { userId: 3, userName: "ZHAO" }
});

mock.onGet(path("/users/{uid}/homework/{hid}")).reply(200, {
  user: {
    userId: 4,
    userName: "ZHANG"
  }
});

// axios的config对象，包含请求信息
// 返回一个数组 [status, {data对象}, {header对象}]
mock.onPost("/login").reply(config => {
  console.log(config);
  // 此时请求的json以及转为字符串，不是json对象，因此需要转换
  let data = JSON.parse(config.data);
  console.log(data.user);

  return [
    200,
    { user: { userId: 333, userName: "gao" } },
    { Authorization: "16513212316" }
  ];
});
