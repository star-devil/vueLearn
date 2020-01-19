import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/Learn.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/Student.vue'),
    meta:{
      login: true,
    },
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
    meta:{
      login: true,
    },
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
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
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

export default router
