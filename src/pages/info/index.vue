<template>
  <div>
    这是收集标注者信息的页面
    <!--获得学历数据-->
    <div>
      <p>请选择您的学历</p>
      <picker @change="eduChange" :value="eduIndex" :range="educationalBackgrounds">
        <button>请选择您的学历</button>
      </picker>
      <view>当前选择的学历：{{educationalBackgrounds[eduIndex]}}</view>
    </div>

    <!--获得籍贯数据-->
    <div>
      <p>请选择您的籍贯</p>
      <picker @change="proChange" :value="proIndex" :range="provinces">
        <button>请选择您的籍贯</button>
      </picker>
      <view>当前选择的籍贯：{{provinces[proIndex]}}</view>
    </div>

    <!--获得年龄数据-->
    <div>
      <p>请输入您的年龄</p>
      <input class="info-input" placeholder="请输入您的年龄" v-model="userAge"/>
      <view>当前年龄：{{userAge}}</view>
    </div>

    <!--获得专业数据-->
    <div>
      <p>请输入您的专业</p>
      <input class="info-input" placeholder="请输入您的专业" v-model="userMajor"/>
      <view>当前专业：{{userMajor}}</view>
    </div>

    <!--获得标注经验数据-->
    <div>
      <p>请问您是否有相关的标注经验</p>
      <radio-group @change="expChange">
        <radio v-for="item in exp" :key="item" :value="item.name" :checked="item.checked">
          {{item.value}}
        </radio>
        {{exp[0].checked}}{{exp[1].checked}}
      </radio-group>
    </div>
    
    <button>提交信息</button>

  </div>
</template>

<script>

import {mapState,mapMutations,mapActions} from 'vuex'

export default {
  data () {
    return {
      educationalBackgrounds: ['初中及初中以下', '高中及中专', '大专', '本科', '硕士及以上'],
      provinces: ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', 
      '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', 
      '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', 
      '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', 
      '香港特别行政区', '澳门特别行政区', '其他国家或地区'],
      eduIndex: 0,
      proIndex: 0,
      userAge: 21,
      userMajor: '',
      exp: [{name: 'yes', value: '有', checked: false}, {name: 'no', value: '无', checked: false}]
    }
  },
  methods: {
    
    eduChange (e) {
      this.eduIndex = e.target.value
    },
    
    proChange (e) {
      this.proIndex = e.target.value
    },
    
    ageChange (e) {
      this.userAge = e.target.value
    },
    
    majorChange (e) {
      this.userMajor = e.target.value
    },
    
    expChange (e) {
      let val = e.target.value
      if (val === 'yes') {
        this.exp[0].checked = true
        this.exp[1].checked = false
      }
      if (val === 'no') {
        this.exp[0].checked = false
        this.exp[1].checked = true
      }
    }
  }
}
</script>

<style scoped>
  .info-input{
    background-color:lavender;
  }
</style>