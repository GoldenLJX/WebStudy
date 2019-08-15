<template>
    <div>
      <p>{{content}}(hahahah)</p>
      <p v-text="content">(hahahah)</p>
      <p v-upper-word="content"></p>
    </div>
</template>

<script>
    export default {
        name: "OrtherInstrcut",
      data() {
        return {
          content: '撩课学院'
        }
      },
      directives:{//自定义一个局部的指令
        'lower-word'(el,binding){
          el.textContent = binding.value.toLowerCase();
        }
      }
    }
</script>

<style scoped>

</style>
