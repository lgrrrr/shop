<template>
    <div class="index">
      <Header :logoTitle="logoMsg" />
      <div class="headerSearch">
        <img src="@/assets/img/sm_log.png" class="kid">
        <router-link :to="'/search'" class="search">
          <img src="@/assets/img/magnifying_lens-.png">搜索商品
        </router-link>
        <img src="@/assets/img/sign_in.png" class="date">
      </div>
      <div class="banner">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item in slideImages" :key="item.title">
             <router-link :to="item.href"><img :src="item.imageUrl" /><span class="title">{{item.title}}</span></router-link>
         </swiper-slide>
         <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
       </swiper>
      </div>
      <div class="indexNav">
        <a :href="indexNav.url" v-for="indexNav in navList" :key="indexNav.id">
          <img :src="indexNav.pic">
          <p>{{indexNav.name}}</p>
        </a>
      </div>
      <p class="clear"></p>
      <div class="indexNews">
        <div class="indexText">
          <img src="@/assets/img/gonggao.png" class="light">
          <p>奶粉降价通知</p>
          <img src="@/assets/img/jiantou.png" class="jiantou">          
        </div>                
      </div>
      <div class="groupList">
        <div class="groupCon">
          <h4>超值拼团
            <router-link to="/">
                查看更多 &gt;&gt;
            </router-link>
          </h4>
          <div class="listCon con">
            <swiper :options="swiperOption">
              <swiper-slide v-for="item in slideImages" :key="item.title">
                  <router-link :to="group.href" v-for="group in groupList" :key="group.title">
                    <dl>
                      <dt><img :src="group.src"></dt>
                      <dd class="hei">{{group.text}}</dd>
                      <dd class="price">{{group.price}}<span>{{group.ren}}</span></dd>
                      <dd class="oldPrice">{{group.oldPrice}}</dd>
                    </dl>
                    <span class="title">{{item.title}}</span></router-link>
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <p class="clear"></p>
      <div class="indexActive">
        <div class="w">
          <div class="activeLeft" >
            <h4>每日秒杀</h4>
            <p class="text"><span class="qian">19点场</span><span class="hou">02:00:18</span></p>
            <p class="clear"></p>
            <router-link :to="active.href" v-for="active in activeList" :key="active.title">
              <dl>
                <dt><img :src="active.src"></dt>
                <dd class="price">{{active.price}}</dd>
                <dd class="oldPrice"><span class="p">{{active.oldPrice}}</span><span class="jia">{{active.spike}}</span></dd>
              </dl>
            </router-link>            
          </div>
          <div class="activeLeft" >
            <h4>砍价活动</h4>
            <p class="texts">一起来砍价~</p>
            <p class="clear"></p>
            <router-link :to="activey.href" v-for="activey in activeyList" :key="activey.title">
              <dl>
                <dt><img :src="activey.src"></dt>
                <dd></dd>
                <dd class="share">{{activey.share}}</dd>
              </dl>
            </router-link>            
          </div>
        </div>
      </div>
      <div class="groupList"></div>
      <div class="title">        
        <h1><img src="@/assets/img/zuo.png" alt="">
            <span>热门榜单</span>
            <img src="@/assets/img/you.png" alt="">
        </h1>        
      </div>
      <div class="listCon hot">
        <router-link :to="hot.href" v-for="hot in hotList" :key="hot.title">
          <dl>
            <dt><img :src="hot.src"></dt>
            <dd class="hei">{{hot.text}}</dd>
            <dd class="hotprice">{{hot.price}}<span>{{hot.pay}}</span></dd>
          </dl>
        </router-link>        
      </div>
      <p class="clear"></p>
      <div class="Viewmore">
        <router-link :to="'More'">查看更多 &gt;&gt;</router-link>
      </div>
      <div class="groupList"></div>
      <div class="title">        
        <h1><img src="@/assets/img/zuo.png" alt="">
            <span>首发新品</span>
            <img src="@/assets/img/you.png" alt="">
        </h1>        
      </div>
      <div class="product">
        <router-link :to="hot.href" v-for="hot in proList" :key="hot.title">
          <dl>
            <dt><img :src="hot.src"></dt>
            <dd class="hei">{{hot.text}}</dd>
            <dd class="hotprice"><span class="big">{{hot.price}}</span><span>{{hot.pay}}</span></dd>
          </dl>
        </router-link>        
      </div>
      <p class="clear"></p>
      <div class="Viewmore">
        <router-link :to="'More'">查看更多 &gt;&gt;</router-link>
      </div>
      <div class="groupList"></div>
      <div class="title">        
        <h1><img src="@/assets/img/zuo.png" alt="">
            <span>精品推荐</span>
            <img src="@/assets/img/you.png" alt="">
        </h1>        
      </div>
      <div class="jptj">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideImages" :key="item.title">
              <router-link :to="item.href"><img :src="item.imageUrl" /><span class="title">{{item.title}}</span></router-link>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
       </swiper>
      </div>
      <div class="listCon jpList">
        <router-link :to="group.href" v-for="group in jpList" :key="group.title">
          <dl>
            <dt><img :src="group.src"></dt>
            <dd class="hei">{{group.text}}</dd>
            <dd class="price">{{group.price}}</dd>
          </dl>
        </router-link>        
      </div>  
      <p class="clear"></p>
      <div class="Viewmore">
        <router-link :to="'More'">查看更多 &gt;&gt;</router-link>
      </div>
      <div class="groupList"></div>
      <div class="title">        
        <h1><img src="@/assets/img/zuo.png" alt="">
            <span>促销单品</span>
            <img src="@/assets/img/you.png" alt="">
        </h1>        
      </div>
      <div class="product">
        <router-link :to="hot.href" v-for="hot in dpList" :key="hot.title">
          <dl>
            <dt><img :src="hot.src"></dt>
            <dd class="hei">{{hot.text}}</dd>
            <dd class="hotprice"><span class="big">{{hot.price}}</span><span>{{hot.pay}}</span></dd>
          </dl>
        </router-link>        
      </div>
      <p class="clear"></p>
      <router-link to="/" class="xia">
        <p>努力加载更多~</p>
      </router-link>
      <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Title from '@/components/Title.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Footer from '@/components/Footer.vue'
export default {                                                           
    components:{
      swiper,
      swiperSlide,
      Title,
      Header,
      Footer
    },
    data(){
      return{
          logoMsg: '首页',
          slideImages:[
            {"imageUrl":require("@/assets/img/banner1.png"),"href":"/"},
            {"imageUrl":require("@/assets/img/recommend_banner.png"),"href":"/"}
          ],
          navList:[],
          groupList:[
            {"href":"/","src":require("@/assets/img/recommend_img1.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","price":"￥149.00","ren":"1000人","oldPrice":"$359.00"},
            {"href":"/","src":require("@/assets/img/recommend_img2.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","price":"￥149.00","ren":"1000人","oldPrice":"$359.00"},
            {"href":"/","src":require("@/assets/img/recommend_img3.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00","price":"￥149.00","ren":"1000人","oldPrice":"$359.00"}
          ],
          activeList:[
            {"href":"/Buying","src":require("@/assets/img/bargain2.png"),"price":"￥149.00","oldPrice":"$359.00","spike":"秒杀价"},
            {"href":"/Buying","src":require("@/assets/img/everyday2.png"),"price":"￥149.00","oldPrice":"$359.00","spike":"秒杀价"}
          ],
          activeyList:[
            {"href":"/","src":require("@/assets/img/bargain1.png"),"share":"立即分享"},
            {"href":"/","src":require("@/assets/img/bargain2.png"),"share":"立即分享"}
          ],
          hotList:[
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."}
          ],
          proList:[
            {"href":"/Detailed","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/Detailed","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"231人付款...","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."}
          ],
          jpList:[
            {"href":"/","src":require("@/assets/img/recommend_img1.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img2.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img3.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img1.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img2.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img3.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img1.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img2.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"},
            {"href":"/","src":require("@/assets/img/recommend_img3.png"),"text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝...","price":"￥149.00"}
          ],
          dpList:[ 
            {"href":"/Detailed","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/Detailed","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥37.00","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥14.90","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
            {"href":"/","src":require("@/assets/img/hot.png"),"price":"￥49.00","pay":"已售231件","text":"婴儿礼盒新生儿玩具满月礼物套装刚出生宝..."},
          ],
          swiperOption: {
             autoplay: {//自动播放
                      delay: 2500,
                     disableOnInteraction: false
                  },               
              pagination: {//分页
                  el: '.swiper-pagination',
                  clickable: true,
                  renderBullet(index, className) {//自定义分页的按钮
                    return `<span class="${className} swiper-pagination-bullet-custom"></span>`
                  }
              }
          }
      }
    },
    mounted:function(){
      var obj=this;
      this.$http.get("http://shop.bailu.sdbairui.com/api/index").then(function(res){
          obj.navList=res.data.data.menus;
        
      })
    }
}

</script>

<style>

</style>