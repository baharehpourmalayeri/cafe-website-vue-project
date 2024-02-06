<script>
import Form from './components/contact/Form.vue'
import Info from './components/contact/Info.vue'

export default {
  components: {
    Form,
    Info
  },
  methods: {
    handleFormSubmitted(formData) {
      console.log(formData)
    }
  }
}
</script>

<template>
  <div class="info-container">
    <Form @formSubmitted="handleFormSubmitted" />
    <Info />
  </div>
</template>

<style>
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(5, 5, 5);
  margin: auto auto;
  height: auto;
  width: 100%;
}

@media screen and (min-width:600px) {
  .info-container {
    flex-direction: column;
    width: 100%;
  }
}

@media screen and (min-width:900px) {
  .info-container {
    flex-direction: row;
    width: 900px;
    height: 860px;
  }
}
</style>
