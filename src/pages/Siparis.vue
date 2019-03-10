<template>
  <div class="content">
   
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <siparis-formu :yiyecekList="yiyecekList" :icecekList="icecekList" data-background-color="green"> </siparis-formu>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <musteri-kart> </musteri-kart>
      </div>
       <div class="md-layout-item md-medium-size-100 md-size-66">
        
      </div>
    
    </div>
  </div>
</template>

<script>
import { SiparisFormu,MusteriKart } from "@/pages";

export default {
  components: {
    SiparisFormu,
    MusteriKart
  },
  data(){
    return {
        yiyecekList:[
         {id:1,urun_adi:'Et Döner',urun_fiyat:5},
         {id:2,urun_adi:'Tavuk Döner',urun_fiyat:4},
         {id:3,urun_adi:'Düürm Et Döner',urun_fiyat:6}
       ],
       icecekList:[
         {id:4,urun_adi:'Küçük Ayran',urun_fiyat:2},
         {id:5,urun_adi:'Büyük Ayran',urun_fiyat:4},
         {id:6,urun_adi:'Coca-Cola',urun_fiyat:6}
       ]
    }
  }
};
</script>
