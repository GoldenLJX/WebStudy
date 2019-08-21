<template>
    <div>
      <p v-if="isShow">{{title}}</p>
      <p v-else>{{name}}</p>
      <button @click="destroy()">销毁</button>
    </div>
</template>
<script>
    export default {
        name: "LifeCircle",
      beforeCreate() {
          console.log('1:beforeCreate');
      },
      data(){
          return {
            isShow:false,
            title:'Golden',
            name:'罗剑鑫',
          }
      },
      methods:{
        destroy(){
          this.$destroy();//调用当前对象的实例来销毁本身
        }
      },
      created() {
        console.log('2:created');
      },
      beforeMount() {
        console.log('3:beforeMount');
      },
      mounted() {
        console.log('4:mounted');
        this.setIntervalId = setInterval(()=>{
          this.isShow = !this.isShow;
        },1000)
      },
      beforeUpdate() {
        console.log('5:mounted');
      },
      updated() {
        console.log('6:updated');
      },
      beforeDestroy() {
        console.log('7:beforeDestroy');
        clearInterval(this.setIntervalId);
      },
      destroyed() {
        console.log('8:destroyed');
      }
    }
</script>

<style scoped>

</style>
