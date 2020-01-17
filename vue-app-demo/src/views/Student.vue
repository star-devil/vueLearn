<template>
  <div class="student">
    <p>学生</p>
    姓名：<input type="text" v-model="name"/>
    <button @click="handleClick">提交</button>
  </div>
</template>
 
<script>
//导航守卫
export default {
  beforeRouteLeave(to, from, next) {
    if(this.name){
      const flag = window.confirm("您确定要离开吗？")
      if(flag){
        this.name = '';
        next();
      }
    }else{
      next();
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods:{
    handleClick() {
      this.name="";
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 15px;
}
</style>