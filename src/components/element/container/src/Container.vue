<template>
  <div
    :class="[
      'el-container',
      {
        'is-vertical': isVertical,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      vaildator: (val) => ["horizontal", "vertical"].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }

      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vNode) => {
            const tag = vNode.componentOptions && vNode.componentOptions.tag;
            return tag === "el-header" || tag === "el-footer";
          })
        : false;
      // 优化下面的代码为上面的
      //   if (this.$slots && this.$slots.default) {
      //     return this.$slots.default.some((vNode) => {
      //       const tag = vNode.componentOptions && vNode.componentOptions.tag;
      //       if (tag === "el-header" || tag === "el-footer") {
      //         return true;
      //       }
      //     });
      //   } else {
      //     return false;
      //   }
    },
  },
};
</script>
