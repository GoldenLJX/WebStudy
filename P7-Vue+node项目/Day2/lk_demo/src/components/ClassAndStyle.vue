<template>
    <div>
        <h3>Class模块</h3>
      <div :class="classOne">class可以通过字符串修改</div>
      <div :class="{oneClass:true,twoClass:true}">class可以通过对象修改</div><!-- 通过键值对的形式来绑定-->
      <div :class="['twoClass']">class可以通过数组修改</div><!--如果是值的话就需要使用引号括起来-->
      <div :class="[classOne,classTwo]">class可以通过数组修改</div><!-- 这个模式更符合开发的使用,推荐使用这个-->
      <h3>Style模块</h3>
      <div
        style="width: 200px;height: 300px;margin: 10px auto"
        :style="{backgroundColor:bgColor,fontSize:fSize}">Style通过动态绑定来修改样式</div>
    </div>
</template>

<script>
    export default {
        name: "ClassAndStyle",
      data(){
          return{
            //这里的变量名是被上面的dom元素使用的,上面通过v-bind来强制绑定
            classOne:'oneClass',
            classTwo:'twoClass',
            bgColor:'blue',
            fSize:'30px'
          }
      }
    }
</script>

<style scoped>
  .oneClass{
    font-size: 30px;
    color: #0aafca;
  }
  .twoClass{
    width:400px;
    height: 100px;
    background-color: red;
    margin: 10px auto;
  }
</style>
