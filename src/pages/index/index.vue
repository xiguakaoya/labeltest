<template>
  <div>
    <div>这是测试mock的页面</div>
    <button @click="test">点击测试</button>
    <input @change="change" v-model="number">
    <div>当前:{{number}}</div>
   
    <!-- <div @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)">
      <span :index="index" class="myclass"  v-for="(ch,index) in dataArr" :key="ch">{{ch}}</span>
    </div> -->
    
    <!-- <div @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)">
      <display :index="index" v-for="(ch,index) in dataArr" :key="ch.content || ch" :data="ch"></display>
    </div> -->

    <div @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)">
      <displayobj v-for="obj in dataObj" :key="obj" :toShow="obj"></displayobj>
    </div>

  </div>
</template>

<script>
//import {get} from '@/utils/request'
import axios from 'axios'
import display from '@/components/display'
//import displaychVue from '../../components/displaych.vue'
import displayobj from '@/components/displayobj'

export default {
  data(){
    return{
      number:10,
      dataArr:['这','是','一','段','待','标','注','的','文','本'],
      elementInfo:[],  //存放每个字的left,top,height,width等信息
      annotedIndex:[], //选中字的下标
      dataObj:[
        {'content':"这",'type':false},
        {'content':"是",'type':false},
        {'content':"一",'type':false},
        {'content':"段",'type':false},
        {'content':"待",'type':false},
        {'content':"标",'type':false},
        {'content':"注",'type':false},
        {'content':"的",'type':false},
        {'content':"文",'type':false},
        {'content':"本",'type':false}
      ]
    }
  },
  components:{
    display,
    displayobj
  },
  mounted:function(){
    let that = this
    setTimeout(()=>{
      const query = wx.createSelectorQuery()
      query.selectAll('.content').boundingClientRect(function(rect){
      for(var i = 0;i<rect.length;i++){
        that.elementInfo.push(rect[i])
      }
    }).exec()
    },50)
    
    // const query = wx.createSelectorQuery()
    // query.selectAll('.normal').boundingClientRect(function(rect){
    //   for(var i = 0;i<rect.length;i++){
    //     that.elementInfo.push(rect[i])
    //   }
    // }).exec()
    //console.log(this.elementInfo)
    
    // const query = wx.createSelectorQuery()
    // query.selectAll('.myclass').boundingClientRect(function(rect){
    //   for(var i = 0;i<rect.length;i++){ 
    //     that.elementInfo.push(rect[i])
    //   }
    // }).exec()

    // setTimeout(()=>{
    //   const query = wx.createSelectorQuery()
    //   query.selectAll('.text').boundingClientRect(function(rect){
    //     //console.log(rect)
    //     for(var i=0;i<rect.length;i++)
    //     {
    //       that.elementInfo.push(rect[i])
    //     }
    //   }).exec()
    // },50)
    
  },
  
  methods:{
    
    // jump(){
    //   axios.get('https://www.baidu.com').then(res=>{
    //     console.log(res)
    //   }).catch(rej=>{
    //     console.log(rej)
    //   })
    // },

    start(e){
      e.preventDefault()
      for(var i=0;i<this.elementInfo.length;i++){
        if(e.touches[0].clientX>=this.elementInfo[i].left && e.touches[0].clientX<=this.elementInfo[i].right &&
        e.touches[0].clientY>=this.elementInfo[i].top && e.touches[0].clientY<=this.elementInfo[i].bottom){
          if(this.annotedIndex.indexOf(i) == -1){
            this.annotedIndex.push(i)
          }
        }
      }
    },

    move(e){
      e.preventDefault()
      for(var i=0;i<this.elementInfo.length;i++){
        if(e.touches[0].clientX>=this.elementInfo[i].left && e.touches[0].clientX<=this.elementInfo[i].right &&
        e.touches[0].clientY>=this.elementInfo[i].top && e.touches[0].clientY<=this.elementInfo[i].bottom){
          if(this.annotedIndex.indexOf(i) == -1){
            this.annotedIndex.push(i)
          }
        }
      }
    },

    end(e){
      e.preventDefault()
      console.log(this.annotedIndex)
      let annoWord=''
      for(var m=this.annotedIndex[0];m<this.annotedIndex[0]+this.annotedIndex.length;m++){
        annoWord=annoWord+this.dataObj[m].content
        //this.dataObj[m].content=''
      }
      console.log(annoWord)
      //console.log(this.dataObj)

      this.dataObj.splice(this.annotedIndex[0],this.annotedIndex.length,{'content':annoWord,'type':true})
      console.log(this.dataObj)
      

      // for(var n=0;n<this.dataObj.length;n++){
      //   if(this.annotedIndex.indexOf(n) != -1){
      //     this.dataObj[n].type=true
      //   }
      // }
      // console.log(this.dataObj)
      
      // let annoWord=''
      // let newArr = Array.from(this.dataArr)
      
      // for(var m=this.annotedIndex[0];m<this.annotedIndex[0]+this.annotedIndex.length;m++){
      //   annoWord=annoWord+this.dataArr[m]
      // }
      
      //this.dataArr.splice(this.annotedIndex[0],this.annotedIndex.length)
      // newArr.splice(this.annotedIndex[0],this.annotedIndex.length,{'content':annoWord,'type':1})
      // this.dataArr = newArr
      // console.log(this.dataArr)

      // for(var i=0;i<this.dataArr.length;i++){
      //   if(this.annotedIndex.indexOf(i) != -1){
      //     //console.log(this.dataArr[i])
      //     this.dataArr[i]={'content':this.dataArr[i],'type':1}
      //   }
      // }
      // console.log(this.dataArr)
     
     // for(var j=0;j<this.dataArr.length;j++){
      //   if(typeof(this.dataArr[j])=="object"){
      //     this.dataArr.splice(j,1)
      //     j=0
      //   }
      // }
      // console.log(this.dataArr)
      this.annotedIndex=[]
    },
    
    change(e){
      this.number = e.target.value
    },

    getElement(e){
      //console.log(e.target)
    }
  }
  
}
</script>

<style scoped>
 
</style>
