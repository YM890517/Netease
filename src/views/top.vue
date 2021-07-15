<template>
  <div>
    <button @click="$router.push('/search')">搜索</button>
    <div class="top" v-for="i in top" :key="i.id" is="router-link" :to="'/list?id='+i.id">
      <div class="left">
        <img :src="i.coverImgUrl" alt="" />
      </div>
      <div class="right">
        <p v-for="(f, index) in i.tracks" :key="f.first">
          {{ index+1 }}.{{ f.first }}-{{ f.second }}
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="i in bottom" :key="i.id" is="router-link" :to="'/list?id='+i.id">
        <img :src="i.coverImgUrl" alt="" />
        <p>{{ i.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { reqTop } from "@/util/request.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    reqTop().then((res) => {
      this.list = res.data.list;
    });
  },
  computed: {
    top() {
      return this.list.filter((item, index) => index < 4);
    },
    bottom() {
      return this.list.filter((item, index) => index > 4);
    },
  },
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';

.top {
  padding: $padding;
  margin-bottom: $margin;
  display: flex;

  .left {
    margin-right: $margin;

    img {
      width: 100px;
      height: 100px;
      border-radius: 20px;
    }
  }

  .right {
    overflow: hidden;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top 5px
    }
  }
}

.bottom {
  padding: $padding;
  display: flex;
  flex-wrap: wrap;
  margin-bottom $footerh
  .item {
    width 33.33%
    text-align center
    img {
      width 90%
      border-radius: 20px;
    }  
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>