<template>
  <div id="app">
    <div>
      <el-link href="https://element.eleme.io" target="_blank"
        >默认链接</el-link
      >
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleClick(e) {
      console.log("xxx", e);
    },
  },
};
</script>

<style lang="scss">
</style>
