import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const login = () => import("@/views/login.vue")
const index = () => import("@/views/index.vue")
const tuijian = () => import("@/views/tuijian.vue")
const list = () => import("@/views/list.vue")
const play = () => import("@/views/play.vue")

const search = () => import("@/views/search.vue")
const top = () => import("@/views/top.vue")

const routes = [
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/index",
    component: index,
    children: [
      {
        path:"",
        redirect: "/index/tuijian"
      },
      {
        path: "tuijian",
        component: tuijian
      },
      {
        path: "top",
        component: top
      }
    ]
  },
  {
    path: "/login",
    component: login
  },
  {
    path: "/list",
    component: list
  },
  {
    path: "/play/:id",
    component: play
  },
  {
    path: "/search",
    component: search
  }
]
export default new Router({
  scrollBehavior(to,from,position){
    if(position){
      return position
    }else{
      return {
        x:0,
        y:0
      }
    }
  },
  routes
})