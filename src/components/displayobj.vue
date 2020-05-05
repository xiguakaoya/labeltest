<template>
  <div style="display:inline">
    <span class="content" id="active">{{toShow.content}}</span>
    
    <!-- <span v-if="toShow.type == true">
      <span id="active" class="content">{{toShow.content}}</span>
    </span>
      
    <span v-else>
      <span class="content">{{toShow.content}}</span>
    </span>  -->
    
  </div>
</template>

<script>
export default {
  props:{
      toShow:{
          // type:[String,Object]
          type:Object
      }
  },
  
  computed:{
    judge:function(){
      if(typeof this.toShow == "object"){
        return true
      }
      else{
        return false
      }
    }
  },
  methods:{
    judgeobj(){
      if(typeof this.toShow == "object"){
        return true
      }
      else{
        return false
      }
    }
  }
}
</script>

<style>
    #active{
        background-color:red;
    }

</style>