<template>
  <div>
    <h1>v-for</h1>
    <ul>
      <li v-for="h in homeworks" :key="h.id">
        <!-- 静态路径加变量实现动态路由 -->
        <router-link v-bind:to="'/homeworks/' + h.id">
          <!-- <router-link :to="`/homeworks/${h.id}`"> -->
          {{ h.name }} / {{ formatDate(h.deadline) }}
        </router-link>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
          <th>do</th>
        </tr>
      </thead>
      <tbody>
        <!-- 返回两个参数，使用唯一的索引，从0开始 -->
        <tr v-for="(h, index) in homeworks" :key="index">
          <td>{{ index }}</td>
          <td>{{ h.name }}</td>
          <td>{{ formatDate(h.deadline) }}</td>
          <td>
            <button @click="removeItem(index)">remove item</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>动态追加数组中的数据</p>
    <button @click="addItem">add item</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
      { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
      { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
    ]
  }),
  computed: {
    formatDate() {
      // 替换T，取消秒
      return date => date.replace("T", " ").substring(0, 16);
    }
  },
  methods: {
    addItem() {
      // 在最后添加
      this.$set(this.homeworks, this.homeworks.length, {
        id: this.homeworks.length + 1,
        name: "Java多线程",
        deadline: new Date().toISOString()
      });
    },
    removeItem(index) {
      // 数组，索引
      this.$delete(this.homeworks, index);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
