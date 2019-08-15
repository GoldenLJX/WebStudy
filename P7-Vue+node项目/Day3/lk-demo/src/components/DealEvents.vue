<template>
    <div>
      <h3>查看事件</h3>
<!-- 这个美元符号可以输出所有的事件-->
      <button @click="testEvent(1,$event)">点我查看事件</button>
      <h3>阻止冒泡事件</h3>
      <!-- 这个美元符号可以输出所有的事件-->
      <div style="width: 200px;height: 200px;background-color: red;margin: 10px auto" @click="testBubble(2)">
        <!-- 这个.stop可以阻止父标签获取冒泡的事件-->
        <button @click.stop="testBubble(1)">点我阻止冒泡事件</button>
      </div>
      <h3>查看prevent 事件</h3>
      <!-- 这个prevent可以取消默认的操作,所以这里就不跳转到百度的页面上-->
      <a href="https://www.baidu.com" @click.prevent="testEvent">点我取消默认的跳转</a>
    </div>
</template>

<script>
    export default {
        name: "DealEvents",
        methods:{
          testEvent(arg,event){
            console.log(arg,event);
          },
          testBubble(arg){
            alert(arg);
          }
      }
    }
</script>

<style scoped>

</style>
