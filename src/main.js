import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AppThoughts from './components/Thoughts.vue'
import AppToolbar from './components/Toolbar.vue'
import AppContacts from './components/Contacts.vue'
import AppCourses from './components/Courses.vue'
import AppMainPage from './components/MainPage.vue'

Vue.use(VueRouter)

Vue.component('AppToolbar', AppToolbar);

var router = new VueRouter({
  routes: [
    { path: '/thoughts', component: AppThoughts },
    { path: '/contacts', component: AppContacts },
    { path: '/courses', component: AppCourses },
    { path: '/', component: AppMainPage }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
