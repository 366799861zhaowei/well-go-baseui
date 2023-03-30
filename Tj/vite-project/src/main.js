import { createApp } from 'vue'
import './style.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import IUI from '../packages/index'
const app = createApp(App)
// app.use(ElementPlus)
app.use(IUI)
app.mount('#app')
