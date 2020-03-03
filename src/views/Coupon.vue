<template>
    <div class="Coupon">
        <Header :logoTitle="logoMsg" />
        <div class="Coupons">
            <div class="cou" v-for="item in couList" :key="item.id">
                <h1>
                    <span>￥</span>
                    {{item.price}}
                </h1>
                <div class="shuo">
                    <h3>{{item.name}}</h3>
                    <h6>{{item.time}}
                        <router-link to="">{{item.use}}</router-link>
                    </h6>
                </div>
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
            logoMsg: '我的优惠券', 
           couList:[
               {"price":"10.00","name":"通用优惠券","time":"2019/12/13-2020/01/09","use":"可使用"},
               {"price":"10.00","name":"国庆优惠券","time":"2019/12/13-2020/01/09","use":"可使用"},
               {"price":"10.00","name":"新人特惠","time":"2019/12/13-2020/01/09","use":"可使用"}
           ]
        }
    }
}
</script>
<style>
.Coupons{background-color: #eeeeee;overflow: auto;padding-bottom: 20rem}
.cou{margin: 0.7rem 0.8rem;overflow: auto}
.cou h1{font-size: 1.8rem;line-height: 5.6rem;font-weight: 400;color: #fff;float: left;background: url('../assets/img/bgPhoto.png') no-repeat ;width: 7.5rem;height: 5.6rem;}
.cou h1 span{font-size: 1.2rem;padding-left: 0.5rem;}
.shuo{background-color: #fff;float: left;overflow: auto;width: 59%;padding: 0.7rem}
.shuo h3{font-size: 1rem;font-weight: 500}
.shuo h6{color: #999999;font-weight: 400;border-top: 1px solid #EEEEEE;margin-top: 0.9rem;padding-top: 0.7rem}
.shuo h6 a{color: #fff;background-color: #FD4862;display: inline-block;padding: 0.2rem 0.8rem;margin-left: 0.7rem;border-radius: 25px}
</style>