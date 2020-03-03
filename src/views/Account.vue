<template>
    <div class="account">
        <Header :logoTitle="logoMsg" />
        <div class="collCon">
            <p>
                <span class="left">
                    总资产（元）<span class="yuan">0.00</span>
                </span>                
                <router-link to="">充值</router-link>
            </p>
            <p class="clear"></p>
            <p class="x">
                <span class="left">
                    累计充值（元）<span>0</span>
                </span>                
                <span class="right">
                    累计消费（元）<span>0</span>
                </span>
            </p>
        </div>
        <div class="accNav">
            <router-link to="" v-for="item in accList" :key="item.id">
                <img :src="item.pic" />
                <p>{{item.name}}</p>
            </router-link>
        </div>
        <div class="active">
            <router-link to="" v-for="item in hdList" :key="item.id" class="act">
                <p>{{item.title}}
                    <span>{{item.name}}</span>
                </p>
                <img :src="item.pic" />
            </router-link>
            <p class="clear"></p>
            <div v-for="item in msList" :key="item.id" class="join">
                <img :src="item.pic" alt="">
                <p>{{item.name}}
                    <span>{{item.title}}</span>
                </p>
                <router-link to="">{{item.join}}</router-link>
            </div>
        </div>
        <p class="clear"></p>    
        <div class="sc">
            <h6>
                <span class="line"></span>
                <img src="@/assets/img/heidian.png" />
                <span class="text">为你推荐</span>
                <img src="@/assets/img/heidian.png" />
                <span class="line"></span>
            </h6>
        </div>            
        <div class="sc recommend">            
            <router-link :to="item.href" v-for="item in dlList" :key="item.title" class="down">
               <dl>
                   <dt><img :src="item.pic" /></dt>
                   <dd class="first">{{item.title}}</dd>
                   <dd class="last">{{item.price}}<span>{{item.num}}</span></dd>
               </dl>
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
            logoMsg: '我的账户', 
            dlList:[
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."}
            ],
            accList:[
                {"href":"","name":"账单记录","pic":require("@/assets/img/zdjl.png")},
                {"href":"","name":"消息记录","pic":require("@/assets/img/xfjl.png")},
                {"href":"","name":"充值中心","pic":require("@/assets/img/czzx.png")},
                {"href":"","name":"积分中心","pic":require("@/assets/img/jfzx.png")}
            ],
            hdList:[
                {"title":"签到领积分","name":"赚积分抵现金","pic":require("@/assets/img/gift.png")},
                {"title":"领取优惠券","name":"满减享优惠","pic":require("@/assets/img/hongbao.png")}
            ],
            msList:[
                {"pic":require("@/assets/img/pintuan.png"),"name":"最新拼团活动","title":"最新的优惠商品上架拼团","join":"立即参与"},
                {"pic":require("@/assets/img/miaosha.png"),"name":"当前限时秒杀","title":"最新商品秒杀进行中","join":"立即参与"},
                {"pic":require("@/assets/img/kanjia.png"),"name":"砍价活动","title":"呼朋唤友来砍价","join":"已结束"}
            ]  
        }
    }
}
</script>
<style>
</style>