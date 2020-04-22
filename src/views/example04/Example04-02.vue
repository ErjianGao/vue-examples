<template>
  <div>
    <h1>v-bind</h1>
    <p>
      <label>
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <!-- 将disabled属性与disabled值绑定 -->
      <button v-bind:disabled="disabled">提交</button>
    </p>

    <!-- 类绑定，如果active为真，则使用bg-red类，可以绑定很多个类 -->
    <p
      @mouseenter="actived"
      @mouseleave="deActived"
      :class="{ 'bg-red': active }"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus suscipit
      magnam eveniet ea exercitationem earum saepe. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Sapiente suscipit quas corporis distinctio
      ducimus ipsum repudiandae?
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    disabled: true,
    active: false
  }),
  methods: {
    setAgree() {
      this.disabled = !this.disabled;
    },
    actived() {
      this.active = true;
    },
    deActived() {
      this.active = false;
    }
  }
};
</script>

<style scoped>
.bg-red {
  background: red;
}
</style>
