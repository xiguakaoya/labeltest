<template>
  <div style="display:inline">
    <displaych v-if="!data.type" :toShow="data"></displaych>
    <displayobj v-else :toShow="data"></displayobj>
  </div>
</template>

<script>
import displaych from '@/components/displaych'
import displayobj from '@/components/displayobj'
export default {
  components:{
      displaych,
      displayobj
  },
  props:{
      data:{
          type:[String,Object]
      }
  },
  computed:{
    judge:function(){
      if(typeof this.data.type === false){
        return true
      }
      else{
        return false
      }
    }
  },
  methods:{
    // judge(){
    //   if(typeof this.data  == "string"){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // },
    isTure(){
      return true
    }
  }
}
</script>

<style>

</style>
