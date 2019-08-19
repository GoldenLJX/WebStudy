<template>
    <div>
        <P>{{count}}</P>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    /*
    * 第一种引用的方式
    * 1.import {mapMutations} from'vuex';
    * 2. ...mapMutations(['INCREMENT','DECREMENT']),
    *
    * 第二种方式:
    * this.$store.commit('DECREMENT');
    * */
    import {mapMutations} from'vuex';
    export default {
        name: "Counter",
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            ...mapMutations(['INCREMENT','DECREMENT']),
            increment(){
                // this.INCREMENT();
                this.$store.dispatch('increment');
            },
            decrement(){
                // this.DECREMENT();
                this.$store.commit('DECREMENT');
            }
        }
    }
</script>

<style scoped>

</style>