<template>
    <div class="headerTitle">
        <img src="@/assets/img/headerJiantou.png" class="list">
        <h1>{{logoTitle}}</h1>
        <div class="position">
            <a href="#">
                <img src="@/assets/img/more.png" alt="" class="more">
            </a>|
            <a href="#">
                <img src="@/assets/img/ding.png" alt="" class="ding">
            </a>
        </div>       
    </div>
</template>

<script>
export default{
    data(){
        return {
            
        }
    },
    props: ['logoTitle']
}
</script>

<style>
</style>