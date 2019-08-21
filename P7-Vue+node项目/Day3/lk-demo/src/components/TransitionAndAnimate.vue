<template>
    <div>
      <button @click="show = !show">切换</button>
      <transition name="fade1">
        <div class="box" v-if="show">撩课学院</div>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "TransitionAndAnimate",
      data(){
          return{
            show:false
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
  opacity: 0;
  transform: translateX(100px);
}

.fade1-enter-active, .fade1-leave-active {
  transition:all  .5s ease-in-out;

}
</style>
