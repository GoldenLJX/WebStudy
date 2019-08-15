<template>
    <div id="test">

        <label>姓:<input type="text" placeholder="请输入姓" v-model="firstName"></label>
        <p></p>
        <label>名:<input type="text" placeholder="请输入名字" v-model="lastName"></label>
        <hr>
<!--        单向-->
        <label>单向<input type="text" placeholder="请输入全名" v-model="fullName"></label>
        <p></p>
        <!--        双向-->
        <label>双向<input type="text" placeholder="请输入全名" v-model="fullNameTwo"></label>
        <p></p>
        <!--        双向-->
        <label>双向<input type="text" placeholder="请输入全名" v-model="fullNameThree"></label>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data(){
            return {
                firstName:'',
                lastName:'',
                fullNameThree:''
            }
        },
        computed:{
            fullName:{
                get(){
                    return this.firstName +'·' + this.lastName;
                }
            },
            fullNameTwo:{
                get(){
                    console.log('fullNameTwo的getter方法');
                    return this.firstName +'·' + this.lastName;
                },
                set(value){
                    console.log('fullNameTwo的setter方法---'+value);
                    let names = value.split('·');
                    console.log(names);
                    this.firstName = names[0];
                    this.lastName = names[1];
                }
            }
        },
        watch:{
            firstName(value){
                console.log('watch监视到firstName发生改变:${value}');
                this.fullNameThree = value + this.lastName;
            },
            lastName(value){
                console.log('watch监视到lastName发生改变:${value}');
                this.fullNameThree = this.firstName+value;
            }
        }
    }
</script>

<style scoped>

</style>