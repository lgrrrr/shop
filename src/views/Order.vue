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
        <div class="no">
            <img src="@/assets/img/no.png" alt="">
            <p>您暂无相关订单哦~</p>
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
                {"name":"待付款","num":"0","href":"/Order"},
                {"name":"待发货","num":"0","href":"/Osp"},
                {"name":"待收货","num":"0"},
                {"name":"待评价","num":"0"},
                {"name":"已完成","num":"0"},
            ]          
        }
    }
}
</script>
<style>
.orderHe{background-color: #FF7084;color: #fff;font-size: 1rem;overflow: auto;padding: 0.8rem 1rem 4rem}
.orderHe h3{font-weight: 400;font-size: 1.1rem;float: left;}
.orderHe h3 span{display: block;padding-top: 0.8rem;font-size: 0.75rem}
.orderHe .orderImg{width: 2.18rem;height: 2.5rem;float: right;margin-top: 1rem}
.Order{background-color: #F5F5F5;overflow: auto;height: 50rem;}
.orderList{background-color: #fff;position: relative;top: -2.5rem;border-radius: 5px;overflow: auto;margin: 0 1rem;padding: 0.8rem 0rem}
.orderList a{width: 20%;float: left;font-size: 0.75rem;color: #333333;text-align: center;display: inline-block}
.orderList a p span{display: block;padding-top: 0.6rem}
.orderList .style{font-weight: bold;border-bottom: 1px solid #FF7084}
.no{text-align: center;margin-top: 2rem}
.no img{width: 4.09rem;height: 4.09rem;}
.no p{font-size: 0.75rem;color: #999999;padding-top: 1rem}
</style>