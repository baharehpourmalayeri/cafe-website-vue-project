<script>
export default {

}
</script>

<style>
nav a:hover {
  text-decoration: underline;
}

nav a {
  color: rgb(5, 5, 5);
}

nav ul li {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  padding: 5px;
}

header {
  background-color: rgba(159, 140, 129, 0.9);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0%;
  height: 80px;
}

#lang {
  margin-right: 10px;
}

#lang img {
  margin: 1px;
  width: 25px;
}

@media screen and (min-width:600px) {
  header {
    height: 100px;
  }

  nav ul li {
    padding: 20px;
    font-size: 22px;
  }

  #lang img {
    width: 30px;
  }

}
</style>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Hem</router-link>
        </li>
        <li>
          <router-link to="/menu">Meny</router-link>
        </li>
        <li><router-link to="/contact">Kontakt & Övrigt</router-link></li>
        <li><a href="admin.html">Kaféhantering</a></li>
        <li><a href="chart.html">Chart</a></li>
      </ul>
    </nav>
    <div id="lang">
      <a href="#"><img src="/assets/images/united-kingdom.png" alt="english-flag"></a>
      <a href="#"><img src="/assets/images/sweden.png" alt="swedish-flag"></a>
    </div>
  </header>
</template>
