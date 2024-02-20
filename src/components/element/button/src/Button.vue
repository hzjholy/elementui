<template>
  <button 
    class="el-button" 
    :class="[type ? `el-button--${type}` : '']">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ElButton",
  props: {
    type: String,
  },
};
</script>
