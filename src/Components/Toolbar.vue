<template>
   <nav>
    <router-link to="/"> <button class="btn btn-main"  >Главная</button></router-link>
	  <router-link to="/thoughts"><button class="btn btn-thoughts" >Мысли</button></router-link>
	  <router-link to="/courses"><button class="btn btn-courses" >Лекции</button></router-link>
	  <router-link to="/contacts"><button class="btn btn-contacts">Контакты</button></router-link>
   </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.btn {
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
.btn:active {
  top: 1px;
  box-shadow: none;
}
.btn:hover {
  transition: .5s linear;
  background-position: -200% 0, 0 0;
}
</style>
