<template>
  <div id="xiangqing">
    <div class="xiangqing">
      <div class="img"><img :src="xian.image" alt="" @click="back"/></div>
      <div class="conten p30 mb30 bgWhite">
        <div class="fb font28">{{ xian.name }}</div>
        <div class="font20 gray">
          月销售{{ xian.sellCount }}好评率{{ xian.rating }}
        </div>
        <div class="flex flex-jb flex-ac">
          <div>
            <span class="fb red font28 mr10">￥{{ xian.price }}</span>
            <span
              class="gray font20"
              style="text-decoration: line-through"
              v-if="xian.oldPrice != ''"
              >￥{{ xian.oldPrice }}</span
            >
          </div>
          <button class="bgBlue white font24" @click="dian">加入购物车</button>
        </div>
      </div>
      <div class="p30 mb30 xiangjia bgWhite">
        <h3 class="font28 fb">商家介绍</h3>
        <p class="font24 mt10 gray">{{ xian.info }}</p>
      </div>
      <div class="pingjia bgWhite p30">
        <h3 class="font28 fb">商家介绍</h3>
        <router-link
          to="/xiangqing2?id=%5Bobject%20Object%5D"
          exact
          tag="span"
          class="font24 p15 bgBlue white"
          >全部</router-link
        >
        <router-link
          to="/xiangqing2/tui"
          tag="span"
          class="font24 p15 bgBlue white"
          >推荐</router-link
        >
        <router-link
          to="/xiangqing2/tu"
          tag="span"
          class="font24 p15 bgBlue white"
          >吐槽</router-link
        >
      </div>

      <router-view :ratings="xian.ratings"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      xian: {},
   
    };
  },

  methods: {
    dian() {
      this.xian.num++
        this.$emit("fn",this.xian)
    },
    // 退回，返回上一页
    back(){
      this.$router.go(-1);
    }
  },
  mounted() {
    this.xian = this.$route.query.id;
  },
};
</script>
<style lang="less" scoped>
#xiangqing {
  position: absolute;
  top: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #f3f5f7;
  z-index: 3;
  .xiangqing {
    overflow: scroll;
    height: 100%;
    img {
      width: 100%;
    }
    .conten {
      & div:last-child {
        button {
          width: 1.48rem;
          padding: 0.12rem 0;
          border: none;
          border-radius: 0.3rem;
        }
      }
    }
    .pingjia {
      border-bottom: 0.01rem solid rgb(90, 88, 88);
      span {
        display: inline-block;
        width: 1.7rem;

        text-align: center;
        border-radius: 0.06rem;

        margin-right: 0.16rem;
        height: 0.62rem;
        margin-top: 0.3rem;
      }
    }
  }
}

.router-link-active {
  background: blue;
}
</style>