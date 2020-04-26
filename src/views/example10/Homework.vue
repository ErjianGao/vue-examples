<template>
  <div>
    <h1>{{ homework.name }}</h1>
    <p>{{ homework.deadline }}</p>
  </div>
</template>

<script>
import { GET_HOMEWORK } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid });
  },
  computed: {
    ...mapState(["homework"])
  }
};
</script>
