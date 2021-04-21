<template>
   <div :id="id" :class="classStyle" :title="title" @click="(event)=>onClick({event,id,type})">
      {{title}}
   </div>
</template>

<script>
export default{
  props:{
    id:{
      type:String,
      default:"EsteEsElId",
    },
    classStyle:{
      type:String,
      default:"gray borderBlack",
    },
    onClick:{
      type:Function,
      default:()=>{},
    },
    title:{
      type:String,
      default:"Titulo",
    },
    type:{
      type:String,
      default:"",
    }
  }

}
//import Calculadora from "./"
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>