
<script>
import Drink from './Drink.vue'

export default {
  created() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((drinks) => {
        this.drinks = drinks
      })
  },
  data() {
    return {
      drinks: null
    }
  },
  components: {
    Drink
  }
}
</script>

<template>
  <div class="menu-bar">
    <h2>Drycker</h2>
  </div>
  <div class="menu-container">
    <Drink v-for="drink in drinks" :title="drink.title" :image="drink.image" :description="drink.description"
      :ingredients="drink.ingredients" />
  </div>
</template>

<style>
.menu-bar {
  width: 99%;
  background-color: rgba(159, 140, 129, 0.9);
  margin: 0 auto;
  height: 150px;
}

h2 {
  text-align: center;
  font-weight: normal;
  font-family: heading-font, Arial, sans-serif;
  font-size: 300%;
  margin-top: 0;
  margin-bottom: 5px;
  color: rgb(20, 13, 13);
  padding-top: 35px;
}

.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: rgb(209, 188, 173);
  width: 99%;
  margin: 0 auto;
  flex-direction: column;
}

@media screen and (min-width:600px) {
  .menu-container {
    flex-direction: row;
  }
}

@media screen and (min-width:900px) {
  .menu-container {
    flex-direction: row;
    margin: 0 auto;
  }

}
</style>
