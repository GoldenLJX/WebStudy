<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" >
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--传递参数,除了字符串以外,其他的都要通过动态绑定:,包括对象也需要使用:-->
<!--    <PropsComponent  :age=25  :person= 'p' />-->
    <CustomeEvents @btnClick="deleteP"/>

    <p ref="word"> 我是即将被删除的P标签</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PropsComponent from'./components/PropsComponent'
import CustomeEvents from'./components/CustomeEvents'
export default {
  name: 'app',
  data(){
    return{
      p:{
        name:'张三丰',
        age:26
      }
    }
  },
  components: {
    // HelloWorld
    // PropsComponent
    CustomeEvents
  },
  methods:{
    logPerson(){

    },
    deleteP(...args){
      //这个args可以接受来自子组件的参数
      console.log(args);
      this.$refs.word.remove();
    }

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
