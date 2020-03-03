<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default{
  components:{
    Footer,
    Header
  },
  data(){
    return {
      
    }
  }
}
</script>
<style>
</style>