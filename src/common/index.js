import Vue from "vue"

import goBack from "./goBack.vue"

let obj = {
  goBack
}

for(let i in obj) {
  Vue.component(i,obj[i])
}