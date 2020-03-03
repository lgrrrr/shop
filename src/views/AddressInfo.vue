<template>
    <div class="address">
        <Header :logoTitle="logoMsg" />
        <div class="addCon">
            <router-link to="" v-for="item in addList" :key="item.title" class="addC">
                <p>{{item.name}}</p>
                <p>{{item.phone}}</p>
                <p>{{item.address}}</p>
                <p class="lan">
                    <span class="moren"><img src="@/assets/img/moren.png" />已设为默认</span>
                    <span class="caozuo">
                        <img src="@/assets/img/bianji.png" />编辑
                        <img src="@/assets/img/del.png" class="del" />删除
                    </span>
                </p>
            </router-link>
            <router-link :to="'/Addnew'" class="add">
                +添加新地址
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
            logoMsg: '收货地址',   
            addList:[
                {"name":"小鱼","phone":"17482917385","address":"山东省泰安市泰山区泰前街道山东交通职业学院御碑楼2号"},
                {"name":"小鱼","phone":"17482917385","address":"山东省泰安市泰山区泰前街道山东交通职业学院御碑楼2号"}
            ]   
        }
    }
}
</script>
<style>
</style>