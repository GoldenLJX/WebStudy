<template>
    <div>
        <h3>If指令:是进行dom元素进行删除增加操作,会进行多次渲染</h3>
        <div v-if="flag">今晚上课</div>
        <div v-else>今晚不上课</div>
      <hr>
      <h3>show指令:原理是将dom元素进行display:none掉,因此适合进行一些频繁切换的操作适合使用show因为不需要进行多次渲染</h3>
      <div v-show="flag">今晚上Vue</div>
      <div v-show="!flag">今晚不上Vue</div>
      <button @click="flag=!flag">切换</button>
    </div>
</template>

<script>
    export default {
        name: "IfAndShow",
      data(){
          return {
            flag:true
          }
      }
    }
</script>

<style scoped>

</style>
