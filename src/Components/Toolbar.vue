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
button {
  position: relative;
  border: transparent;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-shadow: -1px -1px #000;
  user-select: none;
  padding: .8em 2em;
  outline: none;
  background-color: #000;
  background-image: linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%), radial-gradient(190% 100% at 50% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.5) 50%, rgba(0,0,0,0) 50%);
  background-repeat: no-repeat;
  background-size: 200% 100%, auto;
  background-position: 200% 0, 0 0;
  box-shadow: rgba(0,0,0,.3) 0 2px 5px;
} 
button:active {
  top: 1px;
  box-shadow: none;
}
button:hover {
  transition: .5s linear;
  background-position: -200% 0, 0 0;
}
</style>
