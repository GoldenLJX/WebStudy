<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <div class="box" v-if="flag">
        <img :src="pic" alt="">
      </div>
    </transition>

  </div>
</template>

<script>
  import logo from '@/assets/logo.png'
  import animate from'animate.css'
  export default {
    name: "TransitionAndAnimate",
    data(){
      return{
        flag:false,
        pic:logo
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 200px;
    height: 200px;
    background-color: red;
  }

</style>
