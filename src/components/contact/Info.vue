<script>

export default {
  components: {

  }
}
</script>

<template>
  <div class="info-box">
    <div class="info-title">
      <h4>Kontakta oss</h4>
    </div>
    <div>
      <p><strong>Telefon:</strong> ********</p>

      <p><strong>Epost:</strong> info@cafeedolci.se</p>

      <a href="#">
        <p>Café E Dolci på Facebook</p>
      </a>
      <a href="https://instagram.com/cafeedolcii?igshid=NzZhOTFlYzFmZQ=">
        <p>Café E Dolci på Instagram</p>
      </a>
    </div>
    <div class="info-title">
      <h4>Öppettider</h4>
    </div>
    <div>
      <p><span>Måndag-Lördag</span><span class="times">11:00-20:00</span></p>
      <p>Söndag <span class="times">12:00-20:00</span></p>
    </div>
    <div class="info-title">
      <h4>Hitta oss</h4>
    </div>
    <p><strong>Adress:</strong>Café E Dolci</p>
    <p>Värmlandsgatan 16A</p>
    <p>413 28 Göteborg</p>
    <p>Sweden</p>
  </div>
</template>

<style>
.info-box {
  background-color: rgb(198, 178, 163, 0.7);
  text-align: center;
  font-size: 20px;
  width: 100%;
  height: auto;
}

.info-box div {
  margin: 0 auto 10px;

}

.info-title {
  background-color: rgb(198, 178, 163, 0.3);
  height: 50px;
  margin: auto
}

.info-title h4 {
  margin-top: 0;
  padding-top: 6px;
  font-size: 29px;
  color: rgb(5, 5, 5);
}

.times {
  padding-left: 20px;
}

@media screen and (min-width:600px) {
  .info-box {
    width: 80%;
    margin: 0 auto;
  }
}

@media screen and (min-width:900px) {
  .info-box {
    width: 360px;
    height: 100%;
    margin: 0;
  }

  .info-box div p {
    padding: 10px;
    margin: 10px;
  }
}
</style>
