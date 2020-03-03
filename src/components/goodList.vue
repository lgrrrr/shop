<template>
    <div name="show" class="goodList">
        <router-link :to="good.href" v-for="good in list" :key="good.title">
           <dl>
               <dt><img :src="good.img"></dt>
               <dd class="first">{{good.title}}</dd>
               <dd class="price">{{good.sale}}</dd>
               <dd class="last">{{good.price}}<span><img src="@/assets/img/gouanniu.png" /></span></dd>
           </dl>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"show",
    data(){
        var obj=this;
        var url="";
        if(obj.goodId==1){
            url="json/qqg.json";
        }else if(obj.goodId==2){
            url="json/nfnk.json"
        }else{
            url="json/qqg.json";
        }
        this.$http.get(url).then(function(res){
            obj.list=res.data;
        })
        return{
            list:[]
        }
    },
    props:{
        goodId:Number
    },
    watch:{
        goodId(){
            var obj=this;
            var url="";
            if(obj.goodId==1){
                url="json/qqg.json";
            }else if(obj.goodId==2){
                url="json/nfnk.json"
            }
            this.$http.get(url).then(function(res){
                obj.list=res.data;
          })
            return{
                list:[]
            }
        }
    }
}
</script>
<style>
</style>