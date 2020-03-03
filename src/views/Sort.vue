<template>
    <div class="sort">
        <Header :logoTitle="logoMsg" />
        <div class="sortSearch">
            <router-link :to="'/search'" class="search searchSort">
            <img src="@/assets/img/magnifying_lens-.png">搜索商品
            </router-link>
            <p class="clear"></p>
        </div>
        <div class="sortCon">
            <SortNav />
            <SortList />
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import SortNav from '@/components/sortNav.vue'
import SortList from '@/components/sortList.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
      Header,
      SortNav,
      SortList,
      Footer
    },
    data() {
        return{
            logoMsg: '分类'
        }
    }
}
</script>
<style>
</style>