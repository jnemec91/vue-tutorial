import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'
import AboutView from '../views/AboutView.vue'
import JobListView from '@/views/jobs/JobsListView.vue'
import JobDetailsView from '@/views/jobs/JobDetailsView.vue'
import NotFound from '@/views/errors/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobListView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
