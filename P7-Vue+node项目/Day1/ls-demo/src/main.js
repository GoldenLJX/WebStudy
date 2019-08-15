import Vue from 'vue'
import App from './App.vue'
//是否阻止启动消息
Vue.config.productionTip = false
//$mount手动挂载
/*
  ES5中
    render:function(createElement){
        return createElement(App);
    }
    //ES6中支持这种语法
    render(createElement){
        return createElement(App);
    }
    //简化一下
    render(h){
        return h(App);
    }
    //变成箭头函数
    render:h => h(App);
    }
*/
new Vue({
  render: h => h(App),
}).$mount('#app')
