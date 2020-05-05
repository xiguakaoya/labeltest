import Vue from 'vue'
import App from './index'
import '../../mock/index'
import { ExampleAPI } from '../../api/exampleAPI'


const app = new Vue(App)
app.$mount()
