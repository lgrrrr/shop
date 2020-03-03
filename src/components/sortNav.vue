<template>
    <div class="sortNav">
        <h2><p>热门推荐</p></h2>
        <ul>
            <li @click="menu1">全球购</li>
            <li @click="menu2">奶粉尿裤</li>
            <li @click="menu3">辅助零食</li>
            <li @click="menu4">童装童鞋</li>
            <li @click="menu5">家居家纺</li>
            <li @click="menu6">喂养洗护</li>
            <li @click="menu7">居家清洁</li>
            <li @click="menu8">玩具文体</li>
            <li @click="menu9">图书绘本</li>
            <li @click="menu10">孕产用品</li>
            <li @click="menu11">出行装备</li>
            <li @click="menu12">家用电器</li>
            <li @click="menu13">女神专区</li>
            <li @click="menu14">育儿服务</li>
            <li @click="menu15">成长加</li>
        </ul>
    </div>
</template>

<script>
import Msg from '@/components/Msg.js'
export default{
    methods:{
        menu1:function(){
            Msg.$emit("val","1");
        },
        menu2:function(){
            Msg.$emit("val","2");
        },
        menu3:function(){
            Msg.$emit("val","3");
        },
        menu4:function(){
            Msg.$emit("val","4");
        },
        menu5:function(){
            Msg.$emit("val","5");
        },
        menu6:function(){
            Msg.$emit("val","6");
        },
        menu7:function(){
            Msg.$emit("val","7");
        },
        menu8:function(){
            Msg.$emit("val","8");
        },
        menu9:function(){
            Msg.$emit("val","9");
        },
        menu10:function(){
            Msg.$emit("val","10");
        },
        menu11:function(){
            Msg.$emit("val","11");
        },
        menu12:function(){
            Msg.$emit("val","12");
        },
        menu13:function(){
            Msg.$emit("val","13");
        },
        menu14:function(){
            Msg.$emit("val","14");
        },
        menu15:function(){
            Msg.$emit("val","15");
        }
    }
}
</script>

<style>
</style>