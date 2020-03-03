<template>
    <div class="promotion">
        <Header :logoTitle="logoMsg" />
        <div class="Now">
            <h5>当前佣金
                <span>0.00</span>
            </h5>
            <h6>昨日收益
                <span>0</span>
            </h6>
            <h6>积累已提
                <span>0</span>
            </h6>
        </div>
        <div class="draw">
            <router-link to="" class="ljtx">立即提现</router-link>
        </div>
        <div class="proCon">
            <router-link :to="item.href" v-for="item in promoList" :key="item.title">
                <img :src="item.pic"/>
                <p>{{item.name}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{
            logoMsg: '我的推广',
            promoList:[
                {"pic":require("@/assets/img/tgmp.png"),"name":"推广名片","href":""},
                {"pic":require("@/assets/img/tgmr.png"),"name":"推广名人统计","href":""},
                {"pic":require("@/assets/img/yjmx.png"),"name":"佣金明细","href":""},
                {"pic":require("@/assets/img/tgr.png"),"name":"推广人订单","href":""},
                {"pic":require("@/assets/img/tgrph.png"),"name":"推广人排行","href":""},
                {"pic":require("@/assets/img/yjph.png"),"name":"佣金排行","href":""}
            ]          
        }
    }
}
</script>
<style>
</style>