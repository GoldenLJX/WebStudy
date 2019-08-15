<template>
    <div>
        <h3>人民币格式化</h3>
<!--      这样用|来使用过滤器的方法-->
      <p>{{money | rmbFilters(money)}}</p>
      <p>{{page | rmbFilters(page)}}</p>

      <p>{{money | globalMoneyFormat(money)}}</p>
      <p>{{page | globalMoneyFormat(page)}}</p>


      <h3>时间格式化</h3>
      <!--      这样用|来使用过滤器的方法-->
      <p>{{time| timeFomat}}</p>
      <p>{{time| timeFomat('HH:mm:ss')}}</p>
    </div>
</template>

<script>
  import moment from 'moment';
    export default {
        name: "LKFilters",
      data(){
          return {
            money:32000,
            page:1688,
            time:new Date()
          }
      },
      //注册局部的过滤器
      filters:{
          rmbFilters(value){
            return '¥'+ Number(value).toFixed(2);
          },

          timeFomat(value,format='YYYY-MM-DD HH:mm:ss'){
            return moment(value).format(format);
        }
      }
    }
</script>

<style scoped>

</style>
