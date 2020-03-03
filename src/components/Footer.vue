<template>
  <div class="footer">
    <router-link :to="footerList.href" v-for="footerList in footerList" :key="footerList.title">
      <img :src="footerList.src">
      <p>{{footerList.title}}</p>
    </router-link>    
  </div>
</template>

<script>
export default {
  data(){
      return{
          footerList:[
              {"title":"首页","src":require("@/assets/img/home.png"),"href":"/"},
              {"title":"分类","src":require("@/assets/img/footerList2.png"),"href":"/Sort"},
              {"title":"购物车","src":require("@/assets/img/footerList3.png"),"href":"/Cart"},
              {"title":"我的","src":require("@/assets/img/footerList4.png"),"href":"/Personal"}
          ]
      }
  }
};
</script>
<style>
</style>