<template>
    <div class="collect">
        <Header :logoTitle="logoMsg" />
        <div class="sc">
            <h3>收藏夹</h3>
            <router-link :to="item.href" v-for="item in scList" :key="item.title" class="list">
               <img :src="item.pic" />
                <p class="first">{{item.title}}</p>
                <p class="scnum">{{item.sc}}</p>
                <p class="price">{{item.price}}</p>
                <p class="clear"></p>
            </router-link>
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
            logoMsg: '我的收藏', 
            scList:[
                {"href":"/Detailed","title":"婴儿辅食工具套装刀具宝宝不锈钢研磨碗手动儿童剪刀果泥神...","pic":require("@/assets/img/spPhoto.png"),"sc":"726人收藏","price":"￥1.50"},
                {"href":"/Detailed","title":"婴儿辅食工具套装刀具宝宝不锈钢研磨碗手动儿童剪刀果泥神...","pic":require("@/assets/img/spPhoto.png"),"sc":"726人收藏","price":"￥1.50"}
            ],
            dlList:[
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer.png"),"price":"￥14.90","num":"231人付款..."},
                {"href":"/Detailed","title":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","pic":require("@/assets/img/offer_img2.png"),"price":"￥49.00","num":"231人付款..."}
            ]       
        }
    }
}
</script>
<style lang="scss">
$main-color: #f00;
.collect{
    color: $main-color
}
</style>