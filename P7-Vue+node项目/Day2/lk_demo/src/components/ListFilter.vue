<template>
    <div>
      <div>
        <button @click="orderByAge(0)">默认</button>
        <button @click="orderByAge(2)">升序</button>
        <button @click="orderByAge(1)">降序</button>
      </div>
      <h3>搜索内容</h3>
      <input type="text" placeholder="输入要搜索的内容" v-model="search">
      <ul>
        <li v-for="(p,index) in filterPersons" :key="personsKeys[index]">
          {{index + 1}}) 姓名: {{p.name}} 年龄:{{p.age}} 性别: {{p.sex}}
        </li>
      </ul>
    </div>
</template>

<script>
  import shortid from 'shortid';
    export default {
        name: "ListFilter",
        data(){
          return{
            search:'',
            persons:[
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
              {name:'张三',sex:'男',age:18,phone:'18566268994'},
              {name:'李四',sex:'女',age:22,phone:'18566268994'},
              {name:'王五',sex:'男',age:30,phone:'18566268994'},
            ],
            personsKeys:[],
            orderType:0
          }
      },
      mounted() {
        this.personsKeys = this.persons.map(v=>shortid.generate());
      },
      computed:{
          filterPersons(){
            //1获取数据
            let {search , persons,orderType} = this;//解构赋值,this代表当前对象,会将data中的所有的对象都拿到
            console.log(this);
            //2.去除数组中的数据
            let arr  = [...persons];//用展开型参数将
            //3.过滤数据
            if(search.trim()){
              /*indexOf()方法是数组搜索的一个方法,将返回跟所要查找的内容完全相同的第一个元素的下标*/
              arr = persons.filter(p=>p.name.indexOf(search) !==1);
            }
            //4.在返回数组之前进行排序
            if(orderType){
              arr.sort((p1,p2)=>{
                if(orderType===1){//降序
                  return p2.age - p1.age;
                }else{//升序
                  return p1.age - p2.age;
                }
              })
            }
            return arr;
          }
      },
      methods:{
          orderByAge(orderType){
            this.orderType = orderType;
          }
      }
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }
</style>
