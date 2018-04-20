<template class="thg" >
   <ul>
	   <li v-for="thought in thoughts" :key="thought.id" >
		  <a target="_blank" :href="thought.source"> {{thought.think}}</a>
	   </li>
   </ul>
</template>

<script>
var thoughts = require('../Ueberthoughts')
  module.exports = {	
    data ()  {
      return {
        thoughts: thoughts
      }
    }
}
</script>

<style scoped>
a, a:visited {
  color: #09b117;
  text-decoration: none;
}

ul{
  background-image: url("../assets/roma.jpg"); 
  color: cadetblue;
}
</style>