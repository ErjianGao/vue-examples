<template>
  <div>
    <h1>首页, welcome</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("admin");
  },
  computed: {
    ...mapState(["message"])
  }
};
</script>
