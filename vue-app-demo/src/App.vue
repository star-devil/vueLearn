<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="handleCilck">路由练习</div>
      <ul class="nav">
        <div class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/learn">学习</router-link>
          <router-link tag="li" to="/student">学生</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
        </div>
      </ul>
    </div>
    
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  methods:{
    handleCilck() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  padding-bottom: 2px;
  color: #fff;
}

.nav {
  display: flex;
}

.nav li {
  margin: 0 20px;
  cursor: pointer;
}

.view {
  padding: 50px 200px;
}

.active {
  font-weight: bold;
}
</style>
