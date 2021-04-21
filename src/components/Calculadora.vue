<template>
<div>

    <div id="calculadora">
        <div id="contenedorDisplays">
          <div id="displayValores">
            {{total+result}}
          </div>
          <div id="display">
            {{valores}}
          </div>
        </div>
        
        <div id="botones" >
  
          <Botons 
            :key="index" 
            v-for="(item,index) in dataBotons" 
            :id="item.name" 
            :classStyle="item.class" 
            :onClick="onClickHandler" 
            :title="item.title"
            :type="item.type"
          />
     
        </div>
        
     
    </div>
    <div :key="index" v-for="(formInput, index) in form">
       <input @input="(event)=>onInputChange({value:event.target.value,input:formInput})"/>
        <span>
          {{!formInput.isValid && formInput.dirty?formInput.name + " es invalido":""}}
        </span>
    </div>    
    </div>
 
</template>

<script>
import Botons from "./Botons.vue"
import {dataBotons} from "../const/const"
import handlerSelectedValue from "../handler/handlerSelectedValue"
import handlerSelectedOperation from "../handler/handlerSelectedOperation"
import handlerReset from "../handler/handlerSelectedClear"
import handlerResult from "../handler/handlerResult"


export default  {
  components:{
    Botons,
  },
  updated(){
    console.log('debug data',this.total,this.valores,this.result)
  },
  data(){
    return {
     dataBotons,
     total:"",
     valores:"",
     result:""
      

    }
  },
  methods:{
    onClickHandler({event,id,type}){
      //hacer lo que quieras con tu evento y tu id
      let newState;
      switch(type)
      { 
          case "operation":
          newState=handlerSelectedOperation(this.total,this.valores,this.result,event.target.title)
          break
          case "number":
          newState=handlerSelectedValue(this.total,this.valores,this.result,event.target.title) 
          break
          case "clear":
          newState=handlerReset() 
          break
          case "result":
          newState=handlerResult(this.total,this.valores,this.result,event.target.title) 
          break
          default:

      }
      this.total=newState.total
      this.valores=newState.valores
      this.result=newState.result
   
    },

  }
}



</script>

<style scoped>


</style>