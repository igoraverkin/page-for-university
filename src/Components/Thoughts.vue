<template >
<div>
   <ul>
	   <li v-for="thought in thoughts" :key="thought.id" >
		  <a :href="thought.source"> {{thought.think}}</a>
	   </li>
   </ul>
</div>
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

</style>