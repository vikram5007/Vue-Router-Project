import 'devextreme/dist/css/dx.light.css';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Teacher from './components/Teacher.vue'
import Student from './components/Student.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import BaseHeader from './UI/baseheader.vue'
import BaseCard from './UI/basecard.vue'
import BaseButton from './UI/basebutton.vue'



const app = createApp(App)
const router = createRouter({
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/teacher',
            component: Teacher,
        },

        {
            path: '/student',
            component: Student,
        },
        {
            path: '/admin',
            component: Admin,
        },
    ],
    history: createWebHistory()
})
app.component('base-header',BaseHeader)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.use(router)
app.mount('#app')
