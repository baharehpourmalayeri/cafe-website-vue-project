<script>
export default {

}
</script>

<template>
  <footer class="footer">
    <div class="address">
      <p>Värmlandsgatan 16 <br>
        Göteborg</p>
    </div>
    <div class="copy-right">
      <p>Copyright © Café e Dolci 2023</p>
    </div>
    <div>
      <p class="connection">Hitta oss på:</p>
      <div class="icon">
        <a target="_blank" href="#"><img src="/assets/images/facebook.svg" alt="facebook" width="50"></a>
        <a target="_blank" href="https://instagram.com/cafeedolcii?igshid=NzZhOTFlYzFmZQ=="><img
            src="/assets/images/instagram.svg" alt="instagram" width="50"></a>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: rgba(159, 140, 129, 0.9);
  color: rgb(5, 5, 5);
  margin-top: 50px;
}

.footer .address,
.footer .connection,
.footer .icon {
  display: none;
}

.footer .copy-right {
  margin: auto;
}

.icon {
  display: flex;
  justify-content: center;
  font-size: 1.8em;
}

.icon img {
  width: 25px;
  margin-right: 10px;
}

.connection {
  margin-bottom: 0;
  margin-right: 20px;
}

.address {
  margin-left: 20px;
}

@media screen and (min-width:600px) {
  .footer {
    margin-top: 200px;
    height: 100px;
  }

  .footer .address,
  .footer .connection {
    display: block;
  }

  .footer .icon {
    display: flex;
  }

  .footer .copy-right {
    margin: auto;
  }
}
</style>
