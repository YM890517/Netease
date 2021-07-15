<template>
  <div class="list">
    <go-back></go-back>
    <div class="item" v-for="i in list" :key="i.id" @click="send(i.id)">
      <img :src="i.al.picUrl" alt="" />
      <div class="right">
        <h2>歌名：{{ i.al.name }}</h2>
        <p>
          <span v-for="f in i.ar" :key="f.id">歌手：{{ f.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { reqList } from "@/util/request.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  activated() {
    var id = this.$route.query.id;

    if (localStorage.getItem("id") === id) {
      return;
    }
    localStorage.setItem("id", id);
    this.list= []
    reqList({ id: id }).then((res) => {
      this.list = res.data.playlist.tracks;
    });
    console.log(this.list);
  },
  methods: {
    send(id) {
      this.$router.push("/play/" + id);
    },
  },
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';

.item {
  display: flex;
  padding: 20px $padding;
  margin-bottom: $margin;
  background-color: $orange;

  img {
    width: 20%;
    margin-right: $margin;
  }

  .right {
    flex: 1;

    h2 {
      font-size: 0.35rem;
      color: $fff;
    }

    p {
      font-size: 14px;
      color: $black;
    }
  }
}
</style>