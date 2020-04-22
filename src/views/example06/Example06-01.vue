<template>
  <div>
    <h1>Status绑定</h1>
    <p>
      通过根组件store对象绑定
      <br />
      {{ getUser.name }}
    </p>
    <hr />
    通过mapState绑定
    <br />
    {{ user.name }} / {{ user1.address }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 只要变化就回调
  computed: {
    getUser() {
      // 当前对象的跟对象
      return this.$store.state.user;
    },
    // 对象扩展符，把对象变成属性，与根数据同名，更为方便
    ...mapState(["user"]),
    // 如果重名的话，可以通过这种引到本地办法换名
    ...mapState({ user1: state => state.user })
  }
};
</script>
