import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/Learn.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/Student.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community.vue'),
    redirect: '/community/academic',
    children:[
      {
        path: 'academic',
        name: 'academic',
        component: () => import('../components/Academic.vue'),
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('../components/Personal.vue')
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('../components/Download.vue')
      }
    ]
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import('../views/Question.vue')
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('../views/Notfound.vue')
  },
  {
    path: '*',
    redirect(to) {
      if(to.path === '/'){
        return "/home"
      }else{
        return "/notfound"
      }
    }
  }
]

const router = new VueRouter({
  mode:"history",
  linkExactActiveClass: "active-exact",
  linkActiveClass: "active",
  routes
})
////这段话就是刚刚报错我在网上复制的第一种方法 不要就要报错 我也看不懂没看
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
///
export default router
