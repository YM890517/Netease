<template>
  <div class="search">
    <div class="sou">
      <input type="text" placeholder="请输入关键字"  v-model="kw" />
      <button @click="sou">搜索</button>
    </div>
    <div class="hot" v-if="kw===''">
      <h2>热搜词：</h2>
      <ul>
        <li v-for="i in hotList" :key="i.first" @click="send(i.first)">{{i.first}}</li>
      </ul>
    </div>

    <ul class="guan" v-show="kw!==''">
      <li v-for="i in list" :key="i.id" @click="tiao(i.id)">{{i.name}}</li>
    </ul>
  </div>
</template>
<script>
import {reqSearchot, reqSearch} from "@/util/request.js"
export default {
  data() {
    return {
      kw: "",
      hotList:[],
      list:[]
    };
  },
  methods: {
    sou() {
      if(this.kw===""){
        return
      }
      this.list = []
      reqSearch({keywords:this.kw}).then(res => {
        this.list = res.data.result.songs
      })
    },
    send(i){
      this.kw = i
      this.sou()
    },
    tiao(id){
      this.$router.push("/play/" + id);
    }
  },
  mounted(){
    reqSearchot().then(res => {
      this.hotList=res.data.result.hots
    })
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';
.search
  padding $padding
  .sou
    display flex
    input
      width 70%
    button
      flex 1
.hot
  li
    background-color $orange
    display inline-block
    padding $padding
    margin 5px 3px
    border-radius 15px
.guan 
  li
    background-color $red
    padding $padding
    margin-bottom $margin
</style>