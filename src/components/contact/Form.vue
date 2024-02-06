<script>

export default {
  components: {

  },
  data() {
    return {
      firstName: '',
      email: '',
      message: '',
      isFilled: false,
      isSent: false
    }
  },
  computed: {
    validFirstName() {
      return this.firstName !== '' || !this.isFilled
    },
    validEmail() {
      return this.email !== '' || !this.isFilled
    },
    validMessage() {
      return this.message !== '' || !this.isFilled
    },
    validForm() {
      return this.firstName !== '' && this.email !== "" && this.message !== ''
    }
  },
  watch: {
    firstName: function (oldValue, newValue) {
      this.isFilled = true

    },
    email: function (oldValue, newValue) {
      this.isFilled = true
    },
    message: function (oldValue, newValue) {
      this.isFilled = true
    }
  },
  methods: {
    onClick() {
      this.isSent = true
      this.$emit('formSubmitted', {
        firstName: this.firstName,
        email: this.email,
        message: this.message
      });
      this.reset()
    },
    reset() {
      this.firstName = '';
      this.email = '';
      this.message = '';

      setTimeout(() => {
        this.isFilled = false;
      }, 100);
    }
  }

}
</script>

<template>
  <div class="form">
    <p class="paragraph-1">Har du några förslag eller funderingar?</p>
    <p class="paragraph-2">Dela gärna med dig av dem så att du kan hjälpa oss att växa.</p>
    <div class="input-box">
      <div class="input-line">
        <input v-model="firstName" class="form-control" type="text" placeholder="Förnamn" aria-label="John">
        <p v-if="!validFirstName" class="error">Obligatorisk fält!</p>
      </div>
      <div class="input-line">
        <input v-model="email" class="form-control" type="text" placeholder="E-postadress" aria-label="John">
        <p v-if="!validEmail" class="error">Obligatorisk fält!</p>
      </div>
      <div class="input-line">
        <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="20" cols="80"
          placeholder="Meddelande"></textarea>
        <p v-if="!validMessage" class="error">Obligatorisk fält!</p>
      </div>
      <div class="input-line"><input :disabled="!validForm" @click="onClick" type="submit" value="Skicka">
        <p v-if="isSent" class="success">Meddelandet har skickats framgångsrikt.</p>
      </div>
    </div>
  </div>
</template>

<style>
.form {
  background-color: rgb(198, 178, 163, 0.7);
  font-size: 22px;
  text-align: center;
  height: 100%;
  width: 100%;
}

.form p {
  padding-top: 20px;
  margin-top: 0;
  margin-left: 20px;
}

.paragraph-1,
paragraph-2 {
  margin: 0 auto;
}

.paragraph-2 {
  margin-left: 10px;
  margin-right: 10px;
}

input {
  border: 0;
  width: 200px;
  padding: 10px;
  background: #eeeeeeaa;
  color: #555555;
  border-radius: 5px;
}

textarea {
  border: 0;
  padding: 10px;
  background: #eeeeeeaa;
  color: #555555;
  border-radius: 5px;
  width: 90%;
}

input[type=submit] {
  border: 0;
  width: 100px;
  padding: 15px;
  background: #0e0e0e;
  color: #d2bcad;
  border-radius: 5px;
}

input[type=submit]:disabled {
  background-color: #555555;
}

.input-box {
  text-align: left;
  margin: 20px;
}

.input-box div {
  margin-bottom: 20px;
  font-size: 16px;
}

.error {
  color: rgb(192, 80, 61);
  font-size: 13px;
}

.input-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.success {
  color: green;
  font-size: 13px;

}

@media screen and (min-width:600px) {
  .form {
    width: 80%;
    margin: 10px auto;
  }

  textarea {
    width: 90%;
  }
}

@media screen and (min-width:900px) {
  .form {
    width: 480px;
    height: 100%;
    margin: 0;
  }

  textarea {
    width: 90%;
  }

}
</style>
