import { createApp } from 'vue'
import app from '../App.vue'
import antd from 'ant-design-vue'
import router from './router'
import "ant-design-vue/dist/reset.css"

createApp(app)
.use(antd)
.use(router)

.mount('#app')

