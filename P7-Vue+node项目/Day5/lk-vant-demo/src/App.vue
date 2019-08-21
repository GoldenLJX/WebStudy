<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <div id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/mine">Mine</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
  #app{
    width: 1000px;
    height: 1000px;
    margin: 0 auto;
  }
/*<!--  这个意思是当被选中的时候的样式-->*/
  a.router-link-exact-active{
    color: red;
  }
</style>
