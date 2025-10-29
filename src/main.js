import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import { useMainStore } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPlane,
  faBolt,
  faLock,
  faCreditCard,
  faMobileAlt,
  faBullseye
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlane, faBolt, faLock, faCreditCard, faMobileAlt, faBullseye)

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
// Initialize user session before mount
const store = useMainStore()
store.initSession()

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')