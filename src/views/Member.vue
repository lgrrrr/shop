<template>
    <div class="member">
        <Header :logoTitle="logoMsg" />
        <div class="memberBanner">
            <h1>
                普通会员1
                <span>可享受商品折扣</span>
            </h1>
            <img src="@/assets/img/jiangpai.png" class="jp" />
            <h6>
                <img src="@/assets/img/suo.png" />
                该会员等级尚未解锁
            </h6>
        </div>
        <div class="memberCon">
            <h5>
                <img src="@/assets/img/huiyuan.png" />
                会员升级要求
                <span class="num">
                    <span class="ling">0</span>/2
                </span>
            </h5>
            <div class="mark" v-for="item in inter" :key="item.id">
                <h4>{{item.title}}
                    <span>{{item.tj}}</span>
                </h4>
                <p>{{item.name}}
                    <span class="num">
                        <span class="ling">{{item.num1}}</span>/{{item.num2}}
                    </span>
                </p>
            </div>
        </div>
        <div class="sc">
           <h6>
                <span class="line"></span>
                <img src="@/assets/img/heidian.png" />
                <span class="text">为你推荐</span>
                <img src="@/assets/img/heidian.png" />
                <span class="line"></span>
            </h6>
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
            logoMsg: '会员中心', 
            dlList:[
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."}
            ],
            inter:[
                {"title":"满足积分100分","tj":"未满足条件","name":"还需要100经验","num1":"0","num2":"100"},
                {"title":"消费满100元","tj":"未满足条件","name":"还需消费100元","num1":"0","num2":"100"}
            ]
        }
    }
}
</script>
<style>
</style>