<template>
  <div>
    <p>在router启用props支持。在vue props属性中声明同名变量</p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    也可通过$route.params调用
    <br />
    {{ $route.params.sid }}
    <hr />
    {{ getTitle }}
  </div>
</template>
<script>
export default {
  // 路由属性的传递，与data使用差不多，只是data是内部封装的
  props: ["sid", "hid"],
  data: () => ({
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springMVC" },
      { id: 3, title: "JPA" }
    ]
  }),
  // 在同一个组件之间不会再次执行
  created() {
    console.log(this.$route.params.sid);
  },
  // 数据改变了后，重新渲染之前
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouterUpdate()");
    // 如果不满足条件则可以不执行next()
    next();
  },
  methods: {
    init() {}
  },
  computed: {
    getTitle() {
      // 箭头函数，返回一个布尔值
      // find找到第一个就返回homework
      return this.homeworks.find(h => {
        if (h.id == this.hid) {
          return true;
        }
      }).title;
    }
  }
};
</script>
