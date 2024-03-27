import { createRouter, createWebHistory } from 'vue-router'
import { Cookie } from '@/library/tools.js'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import ('../views/home.vue')
    },
    {
      path: '/request-kit',
      name: 'request-kit',
      component: ()=>import ('../views/requestKit.vue')
    },
    {
      path: '/register-login',
      name: 'register-login',
      component: ()=>import ('@/views/register&login.vue')
    },
    {
      path: '/send-kit',
      name: 'send-kit',
      component: ()=>import ('@/views/send-kit.vue')
    },
    {
      path: '/weblog',
      name: 'weblog',
      component: ()=>import ('@/views/weblog.vue')
    },
    {
      path: '/weblog/:id/:slug',
      name: 'weblogDetils',
      component: ()=>import ('@/views/weblogDetail.vue')
    },
    {
      path: '/education/:id',
      name: 'educationDetails',
      component: ()=>import ('@/views/educationDetails.vue')
    },
    {
      path: '/consultation-request',
      name: 'consultation-request',
      component: ()=>import ('@/views/Consultation-request.vue')
    },
    {
      path: '/history-request',
      name: 'history-request',
      component: ()=>import ('@/views/history.vue')
    },
    {
      path: '/profile',
      name: 'user-profile',
      component: ()=>import ('@/views/user.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: ()=>import ('@/views/edit-profile.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ()=>import ('@/views/contact-us.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: ()=>import ('@/views/about-us.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: ()=>import ('@/views/terms-and-conditions.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: ()=>import ('@/views/landing.vue')
    },
    {
      path: '/:catchall*',
      name: 'pageNotFound',
      component: ()=>import ('@/views/404.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})





export default router
