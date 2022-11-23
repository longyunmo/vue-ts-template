import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import api from './api/index'

import './style.css'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)

/* 挂载全局对象 */
app.config.globalProperties.http = api;

app.mount('#app')
