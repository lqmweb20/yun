<template>
  <div id="app">
    <toubu></toubu>
    <div class="nav flex tc">
      <router-link to="/shangping" class="font28">商品</router-link>
      <router-link to="/pingjia" class="font28">评价</router-link>
      <router-link to="/shangjia" class="font28">商家</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>

import toubu from "./views/head";

export default {
 data () {
   return {
   }
 },
  components: {
    toubu,
  },
};
</script>


<style lang="less">
#app {
  // background: red;
  // overflow: hidden;
  width: 7.5rem;
  height: 100%;
}

.nav {
  height: 0.8rem;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
  a {
    flex: 1;
    display: inline-block;
    height: 100%;
    line-height: 0.8rem;
    color: rgb(77, 85, 93);
  }
  .router-link-active {
    color: rgb(240, 20, 20);
  }
}
</style>
