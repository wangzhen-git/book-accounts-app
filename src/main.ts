import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {tagListModel} from "@/models/tagListModel";

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
//全局的组件不能太多了，这个你要学会控制
Vue.component('Icon',Icon)

window.tagList = tagListModel.fetch()
window.createTag = (tagContent:string)=>{
  if (tagContent) {
    const success = tagListModel.create(tagContent)
    if (success === 'duplicated') {
      window.alert('标签名重复')
    }
  }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
