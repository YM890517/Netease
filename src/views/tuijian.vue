<template>
  <div class="tuijian">
    <div class="item" v-for="i in arr" :key="i.id" @click="tuijian(i.id)">
      <img :src="i.picUrl" alt="" />
      <p>{{i.name}}</p>
    </div>
  </div>
</template>
<script>
import {reqTuijian} from "@/util/request.js"
export default {
  data(){
    return {
      arr:[]
    }
  },
  mounted(){
    reqTuijian().then(res => {
      this.arr = res.data.result
    })
  },
  methods:{
    tuijian(id){
      this.$router.push("/list?id="+id)
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';
.tuijian
  display flex
  flex-wrap wrap
  margin-bottom $footerh
  .item
    width 50%
    padding $padding
    box-sizing border-box
    img
      width 100%
</style>