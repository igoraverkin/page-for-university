<template>
   <div id="app">
    <app-toolbar  @backToMainPage="state='start'" @backToThoughts="state='thoughts'" @backToCourses="state='courses'" @backToContacts="state='contacts'">  </app-toolbar>   
    <app-main-page v-if="state == 'start'" ></app-main-page>
    <app-courses v-else-if="state == 'courses'"></app-courses>   
    <app-thoughts v-else-if="state == 'thoughts'"></app-thoughts> 
    <app-contacts v-else-if="state == 'contacts'"> </app-contacts>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
