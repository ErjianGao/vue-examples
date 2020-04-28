import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AUTHORIZATION } from "@/store/types";

const homeworks = [
  { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
  { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
  { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
];

// 所有的请求都是200ms
let mock = new MockAdapter(axios, { delayResponse: 0 });

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

// // axios的config对象，包含请求信息
// // 返回一个数组 [status, {data对象}, {header对象}]
// mock.onPost("/login").reply(config => {
//   console.log(config);
//   // 此时请求的json以及转为字符串，不是json对象，因此需要转换
//   let data = JSON.parse(config.data);
//   console.log(data.user);

//   return [
//     200,
//     { user: { userId: 333, userName: "gao" } },
//     { Authorization: "16513212316" }
//   ];
// });

// vuex与axios与mock整合学习
// mock.onGet(path("/homeworks")).reply(200, {
//   homeworks: homeworks
// });

mock.onGet(path("/homeworks")).reply(c => {
  // reply是一个回调函数，所以写在最后的homework可以加载出来
  return [
    200,
    {
      // 注意这里只能用返回值传递
      homeworks: homeworks
    }
  ];
});

// mock.onGet(path("/homeworks/{hid}")).reply(200, {
//   homework: { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" }
// });

mock.onGet(path("homeworks/{hid}")).reply(c => {
  let reg = /homeworks\/(\d+)/;
  console.log(c);

  // 拿到hid参数
  let hid = c.url.match(reg)[1];
  console.log(hid);
  return [
    200,
    {
      homework: homeworks.find(h => h.id == hid)
    }
  ];
});

// 处理复杂的config可以利用箭头函数
mock.onPost(path("login")).reply(config => {
  console.log("mock");
  console.log(config);

  let data = JSON.parse(config.data);
  let user = data.user;
  console.log("mock");

  console.log(data);

  // 如果不正确
  let result = [401, { message: "用户名密码错误" }];
  if (user.userName == "1001" && user.password == "123456") {
    console.log(3);

    result = [
      200,
      {
        // 设置角色
        role: "student"
      },
      {
        Authorization: "321613"
      }
    ];
  }
  return result;
});

// 模拟加密的token被篡改
mock.onGet(path("index")).reply(c => {
  console.log(1);

  let result = [403, { message: "无权限" }];
  let auth = c.headers[AUTHORIZATION];
  if (auth == "321613") {
    result = [
      200,
      {
        name: "GAO"
      }
    ];
  }
  return result;
});

mock.onGet(path("welcome")).reply(c => {
  console.log("mock");

  let result = [400, { message: "" }];
  console.log(c);

  let role = c.headers["role"];
  console.log(role);

  if (role != null) {
    result = [200, { role: role }];
  }
  return result;
});

//========================
