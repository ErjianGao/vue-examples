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
    login: () => import("@/views/example12/Login.vue"),
    index: () => import("@/views/example12/Index.vue")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
