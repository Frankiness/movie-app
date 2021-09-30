import { createApp } from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router/index'

createApp(App).use(less).use(router).mount('#app')
