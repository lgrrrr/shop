<template>
    <div class="sortList">
        <div v-if="kk==1">
            <GoodList :goodId="1"></GoodList>
        </div>
        <div v-if="kk==2">
            <GoodList :goodId="2"></GoodList>
        </div>
        <div v-if="kk==3">
            <GoodList :goodId="3"></GoodList>
        </div>
        <div v-if="kk==4">
            <GoodList :goodId="4"></GoodList>
        </div>
        <div v-if="kk==5">
            <GoodList :goodId="5"></GoodList>
        </div>
        <div v-if="kk==6">
            <GoodList :goodId="6"></GoodList>
        </div>
        <div v-if="kk==7">
            <GoodList :goodId="7"></GoodList>
        </div>
        <div v-if="kk==8">
            <GoodList :goodId="8"></GoodList>
        </div>
        <div v-if="kk==9">
           <GoodList :goodId="9"></GoodList>
        </div>
        <div v-if="kk==10">
           <GoodList :goodId="10"></GoodList>
        </div>
        <div v-if="kk==11">
           <GoodList :goodId="11"></GoodList>
        </div>
        <div v-if="kk==12">
           <GoodList :goodId="12"></GoodList>
        </div>
        <div v-if="kk==13">
           <GoodList :goodId="13"></GoodList>
        </div>
        <div v-else>
            <GoodList :goodId="0"></GoodList>
        </div>
    </div>
</template>

<script>
import Msg from '@/components/Msg.js'
import GoodList from '@/components/goodList.vue'
export default{
    data(){
        return{
            kk:0
        }
    },
    mounted:function(){
        var obj=this
        Msg.$on('val',function(m){
            obj.kk=m;
        })
    },
    components:{
        GoodList
    }
}
</script>

<style>
</style>