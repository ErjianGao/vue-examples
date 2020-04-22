<template>
  <div>
    <h1>From Binding</h1>
    <!-- form表单更利于管理，但是可以不用，里面不用写属性 -->
    <form>
      <!-- 双向绑定 -->
      <input type="text" v-model="user.name" />
      <br />
      <!-- 两个radio与同一个数据进行绑定，vue知道两个radio是同一组 -->
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />

      <!-- 以select为键 -->
      <select v-model="user.title">
        <!-- 以option的value为值 -->
        <option v-for="(t, index) in titles" :key="index" :value="t.id">
          {{ t.name }}
        </option>
      </select>
      <br />
      <!-- 由于label与br没有任何关系，所以用无意义的标签template，不同标签的值不能相同 -->
      <template v-for="(c, index) in courses">
        <label :key="`lab-${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch-${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <!-- 显式声明为button类型 -->
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <!-- 只能监听change事件 -->
    <input type="file" @change="fileChange" />
    <p v-if="file != null">{{ file.name }} / {{ file.size }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: null,
      sex: null,
      courses: [],
      title: {}
    },
    file: {},
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "java" },
      { id: 5, name: "web" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    submit() {},
    fileChange(event) {
      // 把选中的文件读出
      console.log(event.target.files[0]);
      // 上传文件是二进制，不能使用json类型请求
      this.file = event.target.files[0];
    }
  }
};
</script>
