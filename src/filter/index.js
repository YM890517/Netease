import Vue from "vue"

import time from "./time.js"
import two from "./two.js"

let obj = {
  time,
  two
}

for(let i in obj) {
  Vue.filter(i,obj[i])
}