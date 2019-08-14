<template>
    <div>
      <p>{{content}}(hahahah)</p>
      <p v-text="content">(hahahah)</p>
    </div>
</template>

<script>
    export default {
        name: "OrtherInstrcut",
      data(){
          return{
            content:'撩课学院'
          }
      }
    }
</script>

<style scoped>

</style>
