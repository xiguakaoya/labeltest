<template>
  <div style="display:inline-block">
    <span class="text">{{toShow.content}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
 
  props:{
      toShow:{
          type:[String,Object]
      }
  },
}
</script>

<style>

</style>