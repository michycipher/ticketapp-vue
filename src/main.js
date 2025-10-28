import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'

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
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')