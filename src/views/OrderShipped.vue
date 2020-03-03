<template>
    <div class="Order">
        <Header :logoTitle="logoMsg" />
        <div class="orderHe">
            <h3>订单信息
                <span>累计订单：0 总消费：￥0</span>
            </h3>
            <img src="@/assets/img/wodingdan.png" class="orderImg" />
        </div>
        <div class="orderList">
            <router-link to="" v-for="item in order" :key="item.id">
                <p>{{item.name}}
                    <span>{{item.num}}</span>
                </p>
            </router-link>
        </div>
        <div class="orderInfor">
            <p>2019-09-29 09:34:24
                <span>待发货</span>
            </p>
            <div class="orderCon">
                <dl>
                    <dt><img src="@/assets/img/xiaoTu.png" /></dt>
                    <dd>婴儿礼盒新生儿玩具满月礼物套装刚出生宝...</dd>
                </dl>
                <h5>￥13.92
                    <span>×1</span>
                </h5>
            </div>
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
            logoMsg: '我的订单',
            order:[
                {"name":"待付款","num":"0"},
                {"name":"待发货","num":"3"},
                {"name":"待收货","num":"0"},
                {"name":"待评价","num":"0"},
                {"name":"已完成","num":"0"},
            ]          
        }
    }
}
</script>
<style>
.orderInfor{margin: -1.7rem 1rem;background-color: #fff;border-radius: 5px}
.orderInfor p{font-size: 0.7rem;border-bottom: 1px solid #EEEEEE;padding:0.5rem 1rem}
.orderInfor p span{float: right;color: #FF7084;font-size: 0.75rem}
</style>