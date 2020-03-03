<template>
  <div class="detail">
    <Header :logoTitle="logoMsg" />
    <div class="shopFooter">
      <router-link class="fun" :to="footer.href" v-for="footer in footerList" :key="footer.title">
        <img :src="footer.src">
        <p>{{footer.title}}</p>
      </router-link>
      <div class="button">
        <router-link :to="'/AddShopCart'" class="gwc">加入购物车</router-link>|
        <router-link class="gm" to="">立即购买</router-link>
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
          logoMsg: '商品详情',
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
</style>