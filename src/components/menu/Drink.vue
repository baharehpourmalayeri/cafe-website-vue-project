<script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    description: String,
    ingredients: Array
  },
}
</script>

<style>
.menu-box {
  padding: 0 0;
  background-color: rgba(159, 140, 129, 0.9);
  height: 100%;
}

.menu-box h4 {
  text-align: center;
  font-size: 20px;
}

.menu-box div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(5, 5, 5);

}

.menu-box div ul li {
  list-style: square;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(5, 5, 5);
  font-size: 5vw;
  list-style: square;
  padding: 0;
}

.description {
  text-align: center;
  margin: 10vw 0;
  font-size: 5vw;
  padding: 10px;
}

.title-ing {
  font-size: 5vw;
  text-align: center;
  font-weight: 900;
  padding-top: 15px;
}

.menu-item {
  width: 100%;
  display: grid;
  grid-template-areas:
    "title"
    "content";
}

.menu-item h4 {
  font-family: heading-font, Arial, sans-serif;
  background-color: rgb(53, 41, 34);
  color: rgb(209, 188, 173);
  font-size: 25px;
  padding: 20px 0px;
  text-align: center;
  margin: 0 auto;
  grid-area: title;
  grid-row: 1;
  width: 100%;
}

.menu-item h4 a {
  font-family: heading-font, Arial, sans-serif;
  background-color: rgb(53, 41, 34);
  color: rgb(209, 188, 173);
  font-size: 25px;
  padding: 20px 0px;
  text-align: center;
  margin: 0 auto;
  grid-area: title;
  grid-row: 1;
  width: 100%;

}

.menu-item img {
  width: 100%;
  grid-area: content;
  grid-row: 2;
}

.menu-item .menu-show {
  display: block;
  grid-area: content;
  grid-row: 2;
}

.menu-item:hover .menu-show {
  display: block;
}


@media screen and (min-width:600px) {


  .menu-item {
    width: 33%;
  }

  .menu-item .menu-show {
    display: none;
  }

  .menu-box div p {
    margin: 3px 0;
    text-align: center;
  }

  .menu-box div ul li {
    font-size: 1.5vw;
    padding: 0
  }

  .description {
    text-align: center;
    margin: 10vw 0;
    padding: 5px;
    font-size: 2vw;
  }

  .title-ing {
    font-size: 2vw;
    padding-top: 5px;
    font-weight: 900;
  }

}

@media screen and (min-width:900px) {

  .menu-item {
    width: 25%;
  }

  .menu-item .menu-show {
    display: none;
  }

  .menu-box div {
    padding: 3px 0;
  }

  .menu-box div ul li {
    padding: 0;
    font-size: 1.7vw;
  }

  .description {
    text-align: center;
    margin: 10vw 0;
    padding: 5px;
    font-size: 1.7vw;
  }

  .title-ing {
    font-size: 1.7vw;
    padding: 0;
    font-weight: 900;
  }
}
</style>

<template>
  <div class="menu-item">
    <h4><router-link :to="'/menuItem/' + id">{{ title }}</router-link></h4>
    <img :src="image" alt="hot-drink">
    <div class="menu-show">
      <div class="menu-box">
        <div>
          <p class="description">{{ description }}</p>
          <p class="title-ing">Ingredients:</p>
          <ul>
            <li v-for=" ingredient  in  ingredients ">{{ ingredient }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
