<template>
  <div>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
      </label>
      <br />
      <!-- template没有任何样式 -->
      <template v-for="(c, index) in courses">
        <label :key="`l-${index}`">
          <!-- 双向绑定自动完成选中，通过reference属性可以拿到所有有ref属性的元素 -->
          <input
            ref="checkboxes"
            type="checkbox"
            :key="`c-${index}`"
            v-model="selectedCourses"
            :value="{ id: c.id }"
            :disabled="!agreed"
            @change="change"
          />
          {{ c.name }}
        </label>
        <br :key="`b-${index}`" />
      </template>
      {{ selectedCourses }}
      <br />
      <button
        type="button"
        :disabled="!agreed || !(selectedCourses.length >= amount)"
      >
        submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    courses: [
      { id: 4, name: "Java程序设计" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" },
      { id: 7, name: "移动终端开发技术" }
    ],
    amount: 2,
    // 用户曾经选过什么，让其默认就是选中状态
    selectedCourses: [{ id: 4 }],
    agreed: false
  }),
  methods: {
    change() {
      let checkboxDisable = this.selectedCourses.length >= this.amount;
      // 先将没选中的过滤出来
      this.$refs.checkboxes
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDisable));
    }
  }
};
</script>
