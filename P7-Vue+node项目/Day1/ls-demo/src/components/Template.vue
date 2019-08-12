<template>
    <div>
        <p>{{msg}}</p>
        <!--强制绑定数据-->
        <a v-bind:href="study">我真的棒</a>
        <!--强制绑定响应事件-->
        <button v-on:click="study">点我</button><br>
        <button @click="study">点我</button><br>
    </div>

</template>

<script>
    export default {
        name: "Template",
        data(){
            return{
                msg:'Golden How are you!'
            }
        },
        methods:{
            study(){
                alert('你真的很棒!');
            }
        }
    }
</script>

<style scoped>

</style>