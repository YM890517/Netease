<template>
  <div>
    <go-back></go-back>
    <audio
      :src="`https://music.163.com/song/media/outer/url?id=${playId}.mp3`"
      controls
      autoplay
    ></audio>
    <h2>热门评论</h2>
    <ul class="item">
      <li v-for="i in hot" :key="i.commentId">
        <div class="inner">
          <div class="left">
            <img :src="i.user.avatarUrl" alt="" />
            <span>{{ i.user.nickname }}</span>
          </div>
          <div class="right">
            <span>{{ i.time | time }}</span>
          </div>
        </div>
        <p>{{ i.content }}</p>
      </li>
    </ul>
    <h2>评论</h2>
    <ul class="item">
      <li v-for="i in comment" :key="i.commentId">
        <div class="inner">
          <div class="left">
            <img :src="i.user.avatarUrl" alt="" />
            <span>{{ i.user.nickname }}</span>
          </div>
          <div class="right">
            <span>{{ i.time | time }}</span>
          </div>
        </div>
        <p>{{ i.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {reqComment} from "@/util/request"
export default {
  data() {
    return {
      playId: "",
      hot:[],
      comment:[]
    };
  },
  activated() {
    var id = this.$route.params.id;
    this.playId = id

    if(localStorage.getItem("id")===id){
      return
    }
    
    this.hot = []
    this.comment = []
    reqComment({ id: id }).then((res) => {
      this.hot = res.data.hotComments;
      this.comment = res.data.comments;
    });
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';

h2 {
  font-size: $h2;
  text-align: center;
}

.item {
  li {
    margin-bottom: $margin;
    padding: $padding;
    background-color: $orange;

    .inner {
      overflow: hidden;

      .left {
        float: left;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      .right {
        float: right;
      }
    }

    p {
      text-indent: 2em;
    }
  }
}
</style>