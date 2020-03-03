<template>
  <div class="detail">
    <Header :logoTitle="logoMsg" />
    <div class="showPhoto">
        <router-link to=""><img src="@/assets/img/spPhoto.png" /></router-link>
    </div>
    <div class="intro buy" v-for="item in Bylist" :key="item.title">
      <p class="text">{{item.title}}</p>
      <p>
        <span class="kc">库存：{{item.kucun}}件</span>
        <span>销量：{{item.xiaol}}件</span>
      </p>
    </div>
    <div class="intro bors">
      <p>已选择:<span class="yellow">黄色</span><img src="@/assets/img/yjiantou.png" class="jianimg" /></p>      
    </div>
    <div class="bors">
      <p class="infor">门店信息</p>
    </div>
    <div class="shop">
      <span class="head"></span>
      <h4>店铺名称</h4>
      <router-link class="jrdp" to="/">进入店铺</router-link>
    </div>
    <p class="clear"></p>
    <div class="bors">
      <p class="infor">用户评论
        <router-link to="/" class="all">查看全部 <img src="@/assets/img/yjiantou.png" class="jianimg" /></router-link>
      </p>
    </div>
    <div class="shop pinglun" v-for="item in commet" :key="item.name">
      <span class="cmtHead"></span>
      <h5>{{item.name}}<span><img :src="item.src" /></span></h5>
      <span class="time">{{item.time}}</span>
      <p class="clear"></p>
      <p class="plCon">{{item.title}}</p>
    </div>
    <div class="bors yptj">
      <h1>
        <img src="@/assets/img/titleImg.png" />
        <span>优品推荐</span>
        <img src="@/assets/img/titleImg.png" />
      </h1>
      <router-link :to="item.href" v-for="item in ypList" :key="item.id">
        <dl>
          <dt><img :src="item.src" /></dt>
          <dd>{{item.title}}</dd>
          <dd>{{item.price}}</dd>
        </dl>
      </router-link>
    </div>
    <p class="clear"></p>
    <div class="bors introduce">
      <h1>产品介绍</h1>
      <img src="@/assets/img/bigShow.png">
    </div>
    <div class="shopFooter">
      <router-link class="fun" :to="footer.href" v-for="footer in footerList" :key="footer.title">
        <img :src="footer.src">
        <p>{{footer.title}}</p>
      </router-link>
      <div class="button">
        <router-link to="" class="go">马上抢</router-link>
      </div>   
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Shopfooter from '@/components/ShopFooter.vue'
export default {
    components:{
    swiper,
    swiperSlide,
    Header,
    Shopfooter
    },
    data(){
      return{
            logoMsg: '抢购详情页',
            yhList:[
                {"yh":"优惠","man":"满30减10","href":""},
                {"yh":"优惠","man":"满100减20","href":""}
            ],
            Bylist:[
                {"title":"婴童玩具超大只小黄鸭小汽车","kucun":"91","xiaol":"74"}
            ],
            ypList:[
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"},
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"},
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"},
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"},
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"},
                {"src":require("@/assets/img/recommend_img3.png"),"title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","href":"/"}
            ],
            commet:[
                {"name":"卡**就","src":require("@/assets/img/star.png"),"time":"2019-10-21","title":"用户确认收货后15天内未发表评价，系统默认好评"},
                {"name":"卡**就","src":require("@/assets/img/star.png"),"time":"2019-10-21","title":"用户确认收货后15天内未发表评价，系统默认好评"}
            ],
            footerList:[
              {"title":"客服","src":require("@/assets/img/kefu.png"),"href":"/"},
              {"title":"收藏","src":require("@/assets/img/shoucang.png"),"href":"/"},
              {"title":"购物车","src":require("@/assets/img/gouwuche.png"),"href":"/"}
            ]
      }
  }
};
</script>
<style>
.buy .kc{padding-right: 4rem}
</style>