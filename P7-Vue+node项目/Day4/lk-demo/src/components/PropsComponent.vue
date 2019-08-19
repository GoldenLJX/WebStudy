<template>
    <div>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{person}}</p>
<!--        <button @click="logPerson">点我</button>-->
    </div>
</template>

<script>
    export default {
        name: "PropsComponent",
        //1.props是以数组的形式
        // props:[
        //     'name',
        //     'age'
        // ]
        //2.props是以对象的形式,还可以限定传什么类型的值
        // props:{
        //     name:String,
        //     age:Number,
        //     person:Object,
        //     logPerson:Function
        // }
        //3.还可以通过限定参数的是否为必须和默认值
        props:{
            name:{type:String,require:true,default:'罗剑鑫'},
            age:{type:Number,require:true,default:20},
            person:Object,
            logPerson:Function
        }
    }
</script>

<style scoped>

</style>