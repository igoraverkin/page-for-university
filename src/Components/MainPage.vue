<template>
<div class="body">

  <header class="main-header">
    <div class="container">
      <nav class="main-navigation">
        <router-link to="/"> <a class="btn" href="#" autofocus >О профессоре</a></router-link>
        <router-link to="/thoughts"><a class="btn" href="#" >Важные мысли</a></router-link>
        <router-link to="/courses"><a class="btn" href="#" >Лекции</a></router-link>
        <router-link to="/contacts"><a class="btn" href="#" >Контакты</a></router-link>
        <a class="btn" href="#">Контакты</a>
    </nav>
    </div>
  </header>

  <main class="container">

    <div class="index-logo">
      <span class="logo-name"> uebermarginal</span><br>
      <img src="../assets/margo.jpg" alt="Marginal" height="228px"><br>
      <span class="logo-desc"> Философ, лингвист, олигарх и паук</span>
    </div>

    <section class="features">
      <div class="features-item">
        <b class="features-name">Просто</b>
        <p> Хайдегер, Ницше, Платон.
            О сложных идеях - простым
            языком </p>
      </div>
      <div class="features-item">
        <b class="features-name">Лаконично</b>
        <p> Многие мудрецы исписывали
            целые книги, чтобы донести
            свои идеи. Маргиналу хватает
            нескольких слов, чтобы описать
            их всех.   </p>
      </div>
      <div class="features-item">
        <b class="features-name">Жёстко</b>
        <p> Все слова бьют в цель.
            Все действия задевают до глубины.
            Никакой жалости, никакой пощады! </p>
      </div>
    </section>

    <div class="index-content">
      <div class="index-content-left">
        <h2 class="index-content-title">
          Новости</h2>
          <ul class="news-preview">
            <li>
              <p> Профессор Анатолий Артамонов объявляет
                о сборе средств на создание первой космической
                миссии на Юпитер! Вложись в будущее и стань
                первым в покорении Юпитера! Записывайся в
                добровольцы!</p>
              <time datetime="2018-04-10"> 10 апреля </time>
            </li>
            <li>
              <p> Мудрость профессора достойна того, чтобы
                покорять не только Землю, но и другие планеты!
                Заходи и принимай участие в голосовании! Какую
                планету захватывать следующей?</p>
              <time datetime="2018-04-01"> 1 апреля </time>
            </li>
          </ul>
      </div>

      <div class="index-content-right">
        <h2 class="index-content-title">
          Мысли и лекции </h2>
        <div class="gallery">
          <figure class="gallery-content">
            <div> <a target="_blank" :href="thoughts[i].source"> {{thoughts[i].think}}</a></div>
          </figure>
        <button class="btn gallery-prev" @click="prev"> Назад </button>
        <button class="btn gallery-next" @click="next"> Вперёд </button>
        </div>
      </div>
    </div>

    <div class="index-content">
      <div class="index-content-left">
        <h2 class="index-content-title">
          Контакты</h2>
        <p>
          <a href="https://www.twitch.tv/uebermarginal" target="_blank">Твич канал</a><br>
          <a href="https://www.youtube.com/channel/UCJ10M7ftQN7ylM6NaPiEB6w" target="_blank"><br>Ютуб канал </a>
        </p>
        <p>
          Время вещания:<br>
          сб: с 20:00 до 2:00
        </p>
      </div>

      <div class="index-content-right">
        <h2 class="index-content-title">
          Записаться на курсы</h2>
        <p >Укажите желаемую дату
          и мы с вами свяжемся</p>
        <form class="appointment-form">
          <input type="text" name="date" value="" placeholder="Дата">
          <input type="text" name="time" value="" placeholder="Время">
          <input type="text" name="name" value="" placeholder="Ваше имя">
          <input type="text" name="phone" value="" placeholder="Телефон"><br>
          <button class="btn">Отправить</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="main-footer">
    <div class="container">
      <section class="footer-contacts">Профессор Анатолий Артамонов<br>Адрес: планета Земля, 
      "в сердцах и умах наших" 
      </section>
      <section class="footer-social">Вливайтесь в наши ряды! <br>
        <a href="https://www.twitch.tv/uebermarginal" target="_blank" >Твич канал </a><br>
        <a href="https://www.youtube.com/channel/UCJ10M7ftQN7ylM6NaPiEB6w" target="_blank"> Ютуб канал </a>
      </section>
      <section class="footer-copyright">
        Разработано:<br>
        ООО "Персональные сайты"
      </section>
    </div>
  </footer>

</div>
</template>

<script>
var i =0;
var thoughts = require('../Ueberthoughts')
  module.exports = {	
    data ()  {
      return {
        thoughts: thoughts,
        i:i
      }
    },
    methods: {
      prev(){
        if (this.i>0)
        this.i -=1;
      },
      next(){
        if (this.i<=6)
        this.i +=1;
      }
    }
}
</script>

<style scoped>
.body{
  min-width: 1122px;
  margin: 0;
  padding: 0;
}
.clearfix::after{
  content: "";
  display: table;
  clear: both;
}
.container{
  width: 60%;
  margin: 0 auto;
  padding: 10px;
}
.main-header{
  padding: 20px;
  width: 150%;
}
.logo-name{
  font-family: 'ALGERIAN';
  font-size: 250%;
}
.logo-desc{
  font-family: 'Constantia';
  font-style: italic;
}
.index-logo{
  text-align: center;
  margin-bottom: 5%;
} 
.features{
  margin-bottom: 2%;
  text-align: center;
  color: rgb(243, 243, 243);
}
.features-item {
  float: left;
  width: 31%;
  min-height: 175px;
  margin-right: 20px;
  margin-bottom: 2%;
}
.features-item:last-child{
  margin-right:0;
}
.features-name{
  font-family: 'ALGERIAN', sans-serif;
  text-align: center;
}
.index-content{
  margin-bottom: 35px;
  padding: 4%;
  text-align: center;
}
.index-content-left{
  float: left;
  width: 49%;
  min-height: 210px;
  background: bisque;
  border: 4px double rgb(180, 24, 211);
  border-style: outset;
}
.index-content-right{
  float: right;
  width: 49%;
  min-height: 210px;
  background: bisque;
  border: 4px double rgb(180, 24, 211);
  border-style: outset;
}
.index-content-title{
  font-family: 'ALGERIAN', sans-serif;
}
.gallery-content{
  min-height: 154px;
}
.footer-contacts{
  float: left;
  width: 30%;
  margin-right:60px;
  min-height: 90px;
}
.footer-social{
  float: left;
  width: 30%;
  min-height: 90px;
}
.footer-copyright{
  float: right;
  width: 30%;
  min-height: 90px;
}
.btn {
  margin: 10px 0;
  position: relative;
  border: transparent;
  color: white;
  font-weight: bold;
  text-shadow: -1px -1px #000;
  user-select: none;
  padding: .8em 2em;
  outline: none;
  background-color: rgb(0, 0, 0);
  background-image: linear-gradient(45deg, rgba(255,255,255,.0) 30%, 
  rgba(255,255,255,.8),
  rgba(255,255,255,.0) 70%), 
  radial-gradient(190% 100% at 50% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.4) 50%, rgba(0,0,0,0) 50%);
  background-repeat: no-repeat;
  background-size: 200% 100%, auto;
  background-position: 200% 0, 0 0;
  box-shadow: rgba(0,0,0,.3) 0 2px 5px;
} 
.btn:active {
  top: 1px;
  box-shadow: none;
  color: rgb(148, 147, 147);
}
.btn:hover {
  transition: .5s linear;
  background-position: -200% 0, 0 0;
}
a{
  text-decoration: none;
  color: black;
}
li{
  list-style-type: none; /* Убираем маркеры */
}
</style>
