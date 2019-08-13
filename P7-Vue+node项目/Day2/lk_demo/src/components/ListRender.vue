<template>
    <div>
      <h3>遍历数组</h3>
      <ul>
        <li v-for="(person,index) in persons" :key="personsKeys">
          {{personsKeys}}{{index+1}} ) Name:{{person.name}} ,Age:{{person.age}},gender:{{person.gender}}
        </li>
      </ul>
      <hr>
      <h3>遍历对象</h3>
      <ul>
        <li v-for="(person,index) in persons[0]">
          {{person}}
        </li>
      </ul>
    </div>
</template>

<script>
  import shortid from 'shortid'
    export default {
        name: "ListRender",
      data(){
          return{
            persons:[
              {name:'Golden',age:18,gender:'male'},
              {name:'Anna',age:16,gender:'female'},
              {name:'Karlie',age:17,gender:'female'},
            ],
            personsKeys:[],
          }
      },
      mounted() {
          this.personsKeys = this.persons.map(v=>shortid.generate());
      }
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }
</style>
