import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  let needLoginFlag = to.matched.some(route => route.meta && route.meta.login);
  if(needLoginFlag){
    let isLogin = document.cookie.includes("login=true");
    if(isLogin) {
      next();
      return;
    }
    let toLogin = window.confirm("该页面需要登录才能访问，确认去登录吗？");
    if(toLogin){
      next('/login')
    }

  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
