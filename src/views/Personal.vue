<template>
    <div class="personal">
        <Header :logoTitle="logoMsg" />
        <div class="login">
            <p class="head"></p>
            <div class="name">
                <p>用户名称</p>
                <router-link to="/login">点击授权</router-link>
            </div>
            <img src="@/assets/img/prjiantou.png" class="perjt">
        </div>
        <div class="per">
            <div class="personCon">
                <div v-for="item in disList" :key="item.title" class="many">
                    <h5><p>{{item.title}}</p></h5>
                    <router-link to="">{{item.num}}</router-link>
                </div>        
            </div>
            <div class="personCon">
                <h4>我的订单
                    <router-link :to="'/Order'">全部订单
                        <img src="@/assets/img/yjiantou.png" />
                    </router-link>
                </h4>
                <div class="dingdan">
                    <router-link :to="item.href" class="order" v-for="item in list" :key="item.title">
                        <img :src="item.pic" />
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
            </div>
            <div class="personCon ser">
                <h4>我的服务</h4>
                <div class="dingdan">
                    <router-link :to="item.href" class="service" v-for="item in serList" :key="item.title">
                        <img :src="item.pic" />
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <Footer />
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
            logoMsg: '个人中心',
            disList:[
                {"title":"我的余额","num":"0.00"},
                {"title":"优惠券","num":"0个"},
                {"title":"积分","num":"0分"}
            ],
            list:[
                {"href":"Order","pic":require("@/assets/img/dingdan.png"),"title":"全部订单"},
                {"href":"","pic":require("@/assets/img/fukuan.png"),"title":"待付款"},
                {"href":"/Osp","pic":require("@/assets/img/fahuo.png"),"title":"待发货"},
                {"href":"","pic":require("@/assets/img/shouhuo.png"),"title":"待收货"},
                {"href":"","pic":require("@/assets/img/pingjia.png"),"title":"待评价"}
            ],
            serList:[
                {"href":"/Member","pic":require("@/assets/img/hyzx.png"),"title":"会员中心"},
                {"href":"","pic":require("@/assets/img/kjzx.png"),"title":"砍价记录"},
                {"href":"/Promo","pic":require("@/assets/img/wdtg.png"),"title":"我的推广"},
                {"href":"/Account","pic":require("@/assets/img/wdye.png"),"title":"我的余额"},
                {"href":"/AddressInfo","pic":require("@/assets/img/dzxx.png"),"title":"地址信息"},
                {"href":"/Collect","pic":require("@/assets/img/wdsc.png"),"title":"我的收藏"},
                {"href":"/Coupon","pic":require("@/assets/img/yhq.png"),"title":"优惠券"},
                {"href":"","pic":require("@/assets/img/lxkf.png"),"title":"联系客服"}
            ]
        }
    }
}
</script>
<style>
</style>