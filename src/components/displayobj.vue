<template>
  <div style="display:inline">
    <!-- <span class="content" id="active">{{toShow.content}}</span> -->
    
    <span id="active" class="content">{{toShow.content}}</span>

    <!-- <span class="content">{{toShow.content}}</span> -->
    
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