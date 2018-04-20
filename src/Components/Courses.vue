<template>
  <ul>
	<li v-for="course in courses" :key="course.id" >
	<a target="_blank" :href="course.source"> {{course.meaning}}</a>
	</li>
  </ul>
</template>

<script>
  var courses = require('../Uebercourses')
  module.exports = {	
    data ()  {
      return {
        courses: courses
      }
    }
}
</script>

<style scoped>

a, a:visited {
  color: #09b117;
  text-decoration: none;
}
</style>
