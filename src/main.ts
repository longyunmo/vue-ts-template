import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import api from './api/index'
import globalComponent from './components/index'

import './style.css'
import 'element-plus/dist/index.css'
import './assets/style/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)

/* 挂载全局对象 */
app.config.globalProperties.http = api;

app.mount('#app')

// 注册全局的组件
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme])
}
