import Vue from "vue";
import VueRouter from "vue-router";
import shangping from "../views/shangping.vue";
import pingjia from "../views/pingjia.vue";
import shangjia from "../views/shangjia.vue";
import tanchuang from "../components/head/tanchuang.vue";

import xiangqing2 from "../components/xiangqing2.vue";


import quan from "../components/xian/quan.vue";
import tui from "../components/xian/tui.vue";
import tu from "../components/xian/tu.vue";



import suoyou from "../components/ping/suoyou.vue"
import manyi from "../components/ping/manyi.vue";
import bumanyi from "../components/ping/bumanyi.vue";

Vue.use(VueRouter);

const routes = [
 
  {
    path: "/",
    redirect: "/shangping",
  },
  {
    path: "/shangping",
    component: shangping,
   
  },
  {
    path: "/pingjia",
    component: pingjia,
    children: [
      {
        path: "",
        component: suoyou,
      },
      {
        path: "manyi",
        component: manyi,
      },
      {
        path: "bumanyi",
        component: bumanyi,
      },
    ],
  },
  {
    path: "/shangjia",
    component: shangjia,
  },
  {
    path: "/tanchuang",
    component: tanchuang,
  },
  {
    path: "/xiangqing2",
    component: xiangqing2,
    children: [
      {
        path: "",
        component: quan,
      },
      {
        path: "tui",
        component: tui,
      },
      {
        path: "tu",
        component: tu,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;


