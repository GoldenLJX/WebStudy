<template>
    <div>
        <button @click="btnClick">点击删除父组件中的P标签</button>
    </div>
</template>

<script>
    /*
    * 总结一下自定义事件传递自定义的参数的步骤
    * 1.在子组件中声明一个btnClick这个标记
    * 2.然后再methods中声明这个方法函数
    * 3.在这个方法中调用this.emit('btnClick'),第一个参数和上面保持一致,第二个参数可以传递用户想传的参数
    * 4.然后到父组件中@@btnClick="deleteP",deleteP是要实现的方法(具体操作)
    * */
    export default {
        name: "CustomeEvents",
        methods:{
            btnClick(){
                //这个emit还可以传递参数
                this.$emit('btnClick',{name:'Golden',age:25},'HH');//告诉父组件,我已经触发了这个点击的事件
            }
        }
    }
</script>

<style scoped>

</style>