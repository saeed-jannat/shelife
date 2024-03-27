
import './style.css'
import '@/assets/css/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { Cookie} from './library/tools'

const app = createApp(App)
app.use(createPinia())
app.use(router)


app.use(autoAnimatePlugin)
axios.defaults.baseURL='https://api.shelife.gorgon.ir'
if(Cookie('token')!=null)axios.defaults.headers.common['Authorization'] = `Bearer ${Cookie('token')}`
app.mount('#app')
