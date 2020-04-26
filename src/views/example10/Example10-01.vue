<template>
  <div>
    <h1>嵌套路由</h1>
    <ul>
      <li v-for="(h, index) in homeworks" :key="index">
        <router-link :to="`/example10/homeworks/${h.id}`">
          {{ h.name }}
        </router-link>
      </li>
    </ul>
    <router-view />
    <router-view name="subComponent"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LIST_HOMEWORKS } from "@/store/types.js";
export default {
  created() {
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>
