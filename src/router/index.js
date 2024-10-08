import { createRouter, createWebHistory } from 'vue-router'
import TimeTrackingDashboardView from '../views/TimeTrackingDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'time-tracking-dashboard',
      component: TimeTrackingDashboardView
    }
  ]
})

export default router
