<template>
   <div>
       <button @click="$emit('backToMainPage')"><div id='MainPage'>Главная</div></button>
	   <button @click="$emit('backToThoughts')"><div id='Thoughts'>Мысли</div></button>
	   <button @click="$emit('backToCourses')"><div id='Courses'>Лекции</div></button>
	   <button @click="$emit('backToContacts')"><div id='Contacts'>Контакты</div></button>
   </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
