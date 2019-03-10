<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Bilgisayar Mühendisi</h6>
      <h4 class="card-title">Muhammed Üzeyr ÖZCAN</h4>
      <p class="card-description">
          Adres......
      </p>
      <md-button class="md-round md-success">Düzenle</md-button>
         <md-button class="md-round md-success">{{siparisToplamGetir}}</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import { mapState ,mapGetters, mapActions } from 'vuex';

export default {
  name: "musteri-kart",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  
  computed:{
    ...mapState([
      'siparisToplam',
    ]),
    ...mapGetters([
      'siparisToplamGetir',
    ])
  },
  data() {
    return {};
  }
};
</script>
<style></style>
