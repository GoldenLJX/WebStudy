<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <ClassAndStyle/>-->
<!--    <IfAndShow/>-->
    <OrtherInstruct/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import ClassAndStyle from'./components/ClassAndStyle.vue'
// import IfAndShow from'./components/IfAndShow.vue'
  import ListRender from'./components/ListRender.vue'
  import ListFilter from'./components/ListFilter.vue'
  import OrtherInstruct from'./components/OrtherInstruct.vue'

export default {

  name: 'App',
  components: {
    // ClassAndStyle
    // IfAndShow
    // ListRender
    // ListFilter
    OrtherInstruct
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
