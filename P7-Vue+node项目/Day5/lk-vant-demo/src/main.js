import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,//等价于router:router,这个键值对,可以省略成这样
  render: h => h(App),
}).$mount('#app')
