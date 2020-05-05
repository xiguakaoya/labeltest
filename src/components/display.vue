<template>
  <div style="display:inline">
    
    <!-- <span v-if="judge()">
      <displaych :toShow="data"></displaych>
    </span>
    <span v-if="!judge()">
      <displayobj :toShow="data"></displayobj>
    </span> -->

    <displaych v-if="judge" :toShow="data"></displaych>
    <displayobj v-if="!judge" :toShow="data"></displayobj>
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
  mounted(){
    console.log(this.data)
  },
  computed:{
    judge:function(){
      if(typeof this.data == "string"){
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
