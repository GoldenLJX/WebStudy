import Vue from 'vue'
import Router from 'vue-router'
//引入页面
import Home from'./views/Home';
import About from'./views/About'
import Mine from'./views/Mine'
Vue.use(Router);//使用上面引入的Router这个文件的感觉

let func = (params,query)=>{
    return {
        name:params.name,
        sex:params.sex,
        height:query.height,
        dog:query.dog
    }
};
export default new Router({//对外暴露一个Router对象
   router:[//在这个router的数组配置所有的路由
       {path:'/',redirect:'/home'},
       {path:'/home',name:'home',component:Home},
       {path:'/about',name:'about',component:About},
       // {path:'/mine/:name/:sex',name:'mine',component:Mine}//这个是一种动态绑定的路由信息
       // {path:'/mine',name:'mine',component:Mine,props:{name:'Golden'}}//这个和上面一种不一样就是直接通过props参数来绑定
       // {path:'/mine/:name/:sex',name:'mine',component:Mine,props:true}//但是这个不能获取query的查询参数,下面一种方法可以改善
       {path:'/mine/:name/:sex',name:'mine',component:Mine,props:func}//通过传递一个函数的方法来分别获取里面params和query的参数
   ]
});