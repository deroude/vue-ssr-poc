import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting

const ThemeListView = () => import('../views/ThemeList.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/themes', component: ThemeListView },
      { path: '/', redirect: '/themes' }
    ]
  })
}
