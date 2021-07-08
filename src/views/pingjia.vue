<template>
	<div id="pingjia">
		<div class="manyi flex p30 bgWhite mb30">
			<div class="ping flex flex-c flex-ac">
				<p class="font45 orange">{{ shangjia.serviceScore }}</p>
				<p class="font24 mtb10">综合评分</p>
				<p class="font20 gray">高于周边商家{{ shangjia.rankRate }}</p>
			</div>
			<div class="taidu flex flex-ac flex-jc flex-c font24">
				<div class="flex">
					<p>服务态度</p>
					<div class="flex mlr25 flex-ac">
						<img  class="mr5 xinxin" :src="(index+1)<= parseInt(shangjia.serviceScore)?xinxin:xinxin1" alt="" v-for="item,index in 5" :key="index">
					</div>
					<p>{{ shangjia.serviceScore }}</p>
				</div>
				<div class="flex mtb15">
					<p>服务态度</p>
					<div class="flex mlr25 flex-ac">
						<img class="mr5 xinxin" :src="(index+1)<= parseInt(shangjia.serviceScore)?xinxin:xinxin1" alt="" v-for="item,index in 5" :key="index">
					</div>
					<p>{{ shangjia.foodScore }}</p>
				</div>
				<div class="flex tl">
					<p>送达时间</p>
					<p class="gray ml25">{{ shangjia.deliveryTime }}</p>
				</div>
			</div>
		</div>
		<div class="ping p30 bgWhite">
			<router-link to="/pingjia" exact="" class="font24 p15 bgBlue white" tag="span">全部</router-link>
			<router-link to="/pingjia/manyi" class="font24 p15 bgBlue white" tag="span">满意</router-link>
			<router-link to="/pingjia/bumanyi" class="font24 p15 bgBlue white" tag="span">不满意</router-link>
		</div>
		<router-view :ratings="ratings" ></router-view>
	</div>
</template>

<script>
export default {
  mounted() {
    this.axios.get("data/data.json").then((d) => {
      this.shangjia = d.data.seller;
      this.ratings = d.data.ratings;
    });
    // console.log(111)
  },
  data() {
    return {
      shangjia: {},
      ratings: [],
      xinxin:require("../assets/img/star24_on@2x.png"),
      xinxin1:require("../assets/img/star24_off@2x.png"),
    };
  },
};
</script>
<style lang="less" scoped>
.xinxin{
  width: 0.2rem;
  height: 0.19rem;
}
#pingjia{
  background: #f3f5f7;
  .manyi{
    .ping{
      flex: 1;
      border-right: 0.01rem solid rgb(121, 120, 120);
    }
    .taidu{
      flex: 2;
      &>div{
        padding-left: 0.48rem;
        width: 100%;
      }
    }
  }
  .ping{
        span{
      display: inline-block;
      width: 1.7rem;
      text-align: center;
      margin-right: 0.16rem;
      height: 0.62rem;
      margin-top: 0.3rem;
      border-radius: 0.06rem;
    }
  }
}

.router-link-active{
background: blue;
}
</style>