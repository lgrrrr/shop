<template>
    <div class="shopCart">
        <Header :logoTitle="logoMsg" />
        <div class="Cart">
            <div class="art">
                <h5><span>
                       <img src="@/assets/img/wxz.png" class="xz" />
                    </span>孩子王  
                </h5>
                <div class="artList">
                    <span class="tb">
                        <img src="@/assets/img/xz.png" class="xz bxz" />
                    </span>
                    <div class="gwcCon">
                        <router-link to="">
                            <dl>
                                <dt><img src="@/assets/img/offer_img2.png" /></dt>
                                <dd class="tit">婴儿礼盒新生儿玩具满月礼物套装刚出生宝..
                                    <img src="@/assets/img/delete.png" class="selete" />
                                </dd>
                                <dd class="color">[小鹿] 蓝色
                                    <img src="@/assets/img/xgd.png" />
                                </dd>
                                <dd class="jia">￥34.91
                                    <span class="add">
                                        <span>-</span>
                                        <span class="num">1</span>
                                        <span>+</span>
                                    </span>
                                </dd>
                            </dl>
                        </router-link>
                    </div>                    
                </div>                
            </div>
            <div class="art">
                <h5><span>
                       <img src="@/assets/img/wxz.png" class="xz" />
                    </span>孩子王  
                </h5>
                <div class="artList">
                    <span class="tb">
                        <img src="@/assets/img/xz.png" class="xz bxz" />
                    </span>
                    <div class="gwcCon">
                        <router-link to="">
                            <dl>
                                <dt><img src="@/assets/img/offer_img2.png" /></dt>
                                <dd class="tit">婴儿礼盒新生儿玩具满月礼物套装刚出生宝..
                                    <img src="@/assets/img/delete.png" class="selete" />
                                </dd>
                                <dd class="color">[小鹿] 蓝色
                                    <img src="@/assets/img/xgd.png" />
                                </dd>
                                <dd class="jia">￥34.91
                                    <span class="add">
                                        <span>-</span>
                                        <span class="num">1</span>
                                        <span>+</span>
                                    </span>
                                </dd>
                            </dl>
                        </router-link>
                    </div>                    
                </div>
                <div class="artList">
                    <span class="tb">
                        <img src="@/assets/img/wxz.png" class="xz bxz" />
                    </span>
                    <div class="gwcCon">
                        <router-link to="">
                            <dl>
                                <dt><img src="@/assets/img/offer_img2.png" /></dt>
                                <dd class="tit">婴儿礼盒新生儿玩具满月礼物套装刚出生宝..
                                    <img src="@/assets/img/delete.png" class="selete" />
                                </dd>
                                <dd class="color">[小鹿] 蓝色
                                    <img src="@/assets/img/xgd.png" />
                                </dd>
                                <dd class="jia">￥34.91
                                    <span class="add">
                                        <span>-</span>
                                        <span class="num">1</span>
                                        <span>+</span>
                                    </span>
                                </dd>
                            </dl>
                        </router-link>
                    </div>                    
                </div>               
            </div>
        </div>
        <div class="checkall">
            <div class="allCon">
                <h5><span>
                    <img src="@/assets/img/wxz.png" class="xz" />
                    </span>全选 
                </h5>
                <p>合计：
                    <span>{{price}}</span>
                    <router-link to="">去结算</router-link>
                </p>
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
            logoMsg: '购物车',
            price: '￥34.91'
        }
    }
}
</script>
<style>
</style>