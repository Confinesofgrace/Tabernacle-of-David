import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/our-lyrics',
      name: 'Our-lyrics',
      component: () => import('../views/OurLyrics.vue')
    },

    {
      path: '/our-collection',
      name: 'our-collection',
      component: () => import('../views/OurCollection.vue')
    },

    {
      path: '/write-lyrics',
      name: 'Write-lyrics',
      component: () => import('../views/WriteLyrics.vue'),

      props: route => ({ lyric: route.params.lyric })
    },

    {
      path: '/lyrics/:id',
      name: 'lyrics',
      component: () => import('../views/Lyrics.vue'),
      props: true,
    },
    

  ]
})

export default router
