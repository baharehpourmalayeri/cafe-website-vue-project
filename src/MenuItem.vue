<script>
import axios from 'axios';

export default {
  components: {

  },
  data() {
    return {
      title: '',
      image: '',
      description: '',
      ingredients: []
    }
  },
  created() {
    axios.get('https://api.sampleapis.com/coffee/hot/' + this.$route.params["drinkId"])
      .then(response => {
        this.title = response.data.title
        this.image = response.data.image
        this.description = response.data.description
        this.ingredients = response.data.ingredients
      })

    console.log(this.$route.params["drinkId"])
  }
}
</script>

<template>
  <div class="info">
    <h4 class="title">{{ title }}</h4>
    <img class="image" :src="image" alt="hot-drink">
    <p class="description">{{ description }}</p>
    <p class="title-ing">Ingredients:</p>
    <ul>
      <li class="ingredients" v-for="ingredient in ingredients">{{ ingredient }}</li>
    </ul>
  </div>
</template>

<style>
.info {
  background-color: rgb(209, 188, 173);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info .image {
  width: 300px;
  border-radius: 10px;
}

.info .title {
  font-size: 3vw;
}

.info .description {
  width: 50%;
  text-align: center;
  margin: 10px;
  font-size: 2vw;
}

.info .title-ing {
  font-size: 2.5vw;
  margin: 0;

}

.info .ingredients {
  font-size: 2vw;
  margin: 10px;
}
</style>
