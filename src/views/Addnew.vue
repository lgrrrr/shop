<template>
    <div class="addNew">
        <Header :logoTitle="logoMsg" />
        <div class="addCon addNewcon" v-for="item in aList" :key="item.id">
            <p>
                <label>收货人</label>
                <span>{{item.name}}</span>
            </p>
            <p class="kx"><label>联系方式</label>
                <span>{{item.phone}}</span>
            </p>
            <p><label>所在地区</label>
                <span>{{item.add}}</span>
            </p>
            <p class="kx"><label>联系地址</label>
                <span>{{item.xiangxiadd}}</span>
            </p>
            <p>
                <input type="radio" class="normal">设为默认地址
            </p>
            <p class="ts">提醒：设为默认后，每次下单时会使用该地址，请在下单前确认</p>
            <router-link to="/" class="add">
                立即保存
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
            logoMsg: '添加地址',   
            addList:[
                {"name":"小鱼","phone":"17482917385","address":"山东省泰安市泰山区泰前街道山东交通职业学院御碑楼2号"},
                {"name":"小鱼","phone":"17482917385","address":"山东省泰安市泰山区泰前街道山东交通职业学院御碑楼2号"}
            ],
            aList:[
                {"name":"小鱼","phone":"17463859275","add":"山东省泰安市泰山区泰前街道","xiangxiadd":"山东交通职业学院御碑楼2号"}
            ] 
        }
    }
}
</script>
<style>
</style>