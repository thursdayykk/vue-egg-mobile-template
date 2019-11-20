<template>
  <div>
    <transition name="slide-right">
        <router-view></router-view>
    </transition>
    <van-button type="primary" @click="$router.push({name:'test'})">test</van-button>
    <van-button type="primary" @click="$router.push({name:'home'})">home</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
    components:{
        [Button.name]:Button
    }
}
</script>

<style style="scss" scoped>
@import '../assets/css/animate.scss';
</style>