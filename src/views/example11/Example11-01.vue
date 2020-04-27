<template>
  <div>
    <index v-if="isLogin"></index>
    <login v-else></login>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    index: () => import("@/views/example11/Index.vue"),
    login: () => import("@/views/example11/Login.vue")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
