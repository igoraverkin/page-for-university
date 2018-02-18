import Vue from 'vue'
import App from './App.vue'

import AppThoughts from './components/Thoughts.vue'
import AppToolbar from './components/Toolbar.vue'
import AppContacts from './components/Contacts.vue'
import AppCourses from './components/Courses.vue'
import AppMainPage from './components/MainPage.vue'

Vue.component('AppThoughts', AppThoughts);
Vue.component('AppToolbar', AppToolbar);
Vue.component('AppContacts', AppContacts);
Vue.component('AppCourses', AppCourses);
Vue.component('AppMainPage', AppMainPage);


new Vue({
  el: '#app',
  render: h => h(App)
})
