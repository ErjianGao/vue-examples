<template>
  <div>
    <h1>Mutation</h1>
    {{ user.name }} / {{ user.address }}
    <p>
      <input type="text" v-model="myUser.name" placeholder="请输入姓名" />
      <br />
      <input type="text" v-model="myUser.address" placeholder="请输入地址" />
      <br />
      <button type="button" @click="change">submit</button>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { UPDATE_USER } from "@/store/types.js";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      // 同步方法，向哪一事件发送通知，激活事件
      this.$store.commit(UPDATE_USER, {
        name: this.myUser.name,
        address: this.myUser.address
      });
    }
  },
  computed: {
    // 里面放的是属性,mapState是方法
    ...mapState(["user"])
  }
};
</script>
