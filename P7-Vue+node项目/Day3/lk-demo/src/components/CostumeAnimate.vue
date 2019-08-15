<template>
    <div>
      <button @click="flag = !flag">切换</button>
      <transition name="fade1">
        <div class="box" v-if="flag">
          <img :src="pic" alt="">
        </div>
      </transition>

    </div>
</template>

<script>
  import logo from '@/assets/logo.png'
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
/*注意这里的过渡效果的名字,fade1是和上面标签中的transition中的name属性是保持一致的*/
/*过渡其实就是实现六个类的一些CSS动画操作,下面显示4个了,还有的可以去看Vue的官网*/

.fade1-enter,.fade1-leave-to{
  animation: bounce 1s;
}

.fade1-enter-active, .fade1-leave-active {
  animation: bounce 1s;
}
  @keyframes bounce {
    0%{
      transform: scale(0);
    }
    5%{
      transform: scale(0.6);
    }
    100%{
      transform: scale(2);
    }
  }
</style>
