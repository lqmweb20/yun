<template>
  <div id="head">
    <div class="bg">
      <img :src="seller.avatar" alt="" />
    </div>
    <div class="conten flex">
      <div class="img">
        <img :src="seller.avatar" alt="" />
      </div>
      <div class="pingpai">
          <div class="flex flex-ac ">
            <img src="../assets/img/brand@2x.png" alt="" class="pingpaiimg">  <h3 class="font32">粥品香坊(大运村)</h3>
          </div>
          <div class="font24">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="flex flex-ac"> <img src="../assets/img/decrease_1@2x.png" alt="" class="jian"> <span>在线支付满28减5，满50减10</span> </div>
      </div>
      <router-link  tag="div" class="wu tc font20" to="/tanchuang" >5个></router-link>
    </div>
    <div class="dibu flex flex-ac white font20">
      <img src="../assets/img/bulletin@2x.png" alt="" class="gonggao">
      <p class="cutFont mlr5 font20">{{seller.bulletin}}</p>
      <span>></span>
    </div>

  </div>
 
</template>

<script>

export default {
   data() {
    return {
      seller: {},
      
    };
  },
 mounted() {
    this.shuju();
    
  },
  methods: {
    shuju() {
      this.axios.get("data/data.json").then((d) => {
          this.seller = d.data.seller;
          // console.log(d.data.seller)

      });
    },
   
  },
};
</script>
<style lang="less" scoped>
.gonggao{
  width: 0.42rem;
  height: 0.24rem;
}
.jian{
  width: 0.24rem;
  height: 0.24rem;
}
.pingpaiimg{
  width: 0.6rem;
  height: 0.36rem;
}
#head {
  height: 2.68rem;
  overflow: hidden;
  position: relative;
  .bg {
    position: absolute;
    width: 100%;
    img {
      width: 100%;
      filter: blur(0.2rem);
    }
  }
  .conten {
    position: absolute;
    width: 100%;
    z-index: 1;
    height: 2.12rem;
    padding: 0.48rem 0.24rem 0.36rem 0.48rem;
    .img{
      width: 1.28rem;
      height: 1.28rem;
      border-radius: 0.04rem;
      overflow: hidden;
      margin-right: 0.34rem;
    }
    .pingpai{
      color: white;
      flex: 1;
      div:nth-child(1){
         
        h3{
          margin-left: 0.12rem;
        }
       
      }
      div:nth-child(2){
        margin-top: 0.08rem;
       
      }
      div:nth-child(3){
      
        margin-top: 0.08rem;
        font-size: 0.2rem;
        span{
          margin-left: 0.08rem;
        }
      }
    }
    .wu{
      height: 0.48rem;
      width: 0.86rem;
      background: rgba(0, 0, 0, .2);
      border-radius: 0.24rem;
      
      line-height: 0.48rem;
  
      color: white;
      align-self: flex-end;
    }
  }
  .dibu {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .2);
    padding: 0 0.24rem;
    height: 0.56rem;
    p{
      letter-spacing: 0.05rem;
    }
  }
}
#head:after {
  content: "";
  position: absolute;
  top: 0;
  background: rgba(2, 2, 2, 0.5);
  width: 100%;
  height: 100%;
}


</style>