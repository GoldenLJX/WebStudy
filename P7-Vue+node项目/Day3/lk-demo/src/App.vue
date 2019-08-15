<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <DealEvents/>-->
<!--    <LKFilters/>-->
<!--    <TransitionAndAnimate/>-->
<!--    <CostumeAnimate/>-->
<!--    <AnimateCSS/>-->
    <LifeCircle/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import DealEvents from'./components/DealEvents'
import LKFilters from'./components/LKFilters'
// import TransitionAndAnimate from'./components/TransitionAndAnimate'
// import CostumeAnimate from'./components/CostumeAnimate'
// import AnimateCSS from'./components/AnimateCSS'
import LifeCircle from'./components/LifeCircle'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // DealEvents
    // LKFilters
    // TransitionAndAnimate
    // CostumeAnimate
    // AnimateCSS
    LifeCircle
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
