<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'home',
  mounted() {
    axios.get('/mediListData')//axios中的get方法 第一个参数是url 第二个参数是入参
    .then(res => {
      alert(res)
    })
  },
  components: {
    HelloWorld
  },
}
</script>

<style lang="less" scoped>
// 将这个样式文件路径放到全局去，需要下载一个vue 插件“vue add style-resources-loader”
// @import "../assets/styles/variable.less";
div {
  color: @color;
}
</style>