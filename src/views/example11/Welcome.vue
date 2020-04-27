<template>
  <div>
    <h1>welcome {{ role }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("welcome");
  },
  computed: {
    ...mapState(["role"])
  }
};
</script>
