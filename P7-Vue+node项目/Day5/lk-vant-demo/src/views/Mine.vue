<template>
    <div id="mine">
        <h2>我的</h2>
    </div>
</template>

<script>
    export default {
        name: "MIne",
        created(){
            console.log(this.$route);
        }

    }
</script>

<style scoped>
    #mine{
        width: 500px;
        height: 500px;
        margin: 0 auto;
        background-color: rosybrown;
    }
    h2{
        color: #0aafca;
        font-size: 30px;
    }
</style>