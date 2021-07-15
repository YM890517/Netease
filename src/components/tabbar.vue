<template>
  <div class="footer">
    <div class="item" v-for="i in tabNav" :key="i.text" is="router-link" :to="i.path" activeClass="select">
      <img :src="i.selectImg" alt="" v-if="$route.path!=i.path"/>
      <img :src="i.noSelect" alt="" v-else/>
      <p>{{ i.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabNav"],
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  background-color: $red;

  height $footerh
  text-align: center;

  .item {
    width: 50%;
    padding: 2px 0;
    color:#333
    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
  }
}
.select {
  background-color $fff
  p{
    color:$pink
  }
}
</style>