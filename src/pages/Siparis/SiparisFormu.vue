<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Sipariş Formu</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Yiyecek</label>
               <md-select v-model="seciliYiyecek"  multiple>
          <md-option v-for="item in yiyecekList"  :key="item.id" :value="item">{{item.urun_adi}} - {{item.urun_fiyat}} TL</md-option>
          
        </md-select>
              </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>İçecek</label>
                 <md-select v-model="seciliIcecek"  multiple>
          <md-option v-for="item in icecekList"  :key="item.id" :value="item">{{item.urun_adi}} - {{item.urun_fiyat}} TL</md-option>
          
        </md-select>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Sipariş Açıklama</label>
              <md-textarea v-model="aciklama"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="ekle">Ekle</md-button>
           

          </div>
        </div>
      </md-card-content>
    </md-card> 
    
     <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title"></h4>
            <p class="category">Sipariş Toplam : 50 TL</p>
          </md-card-header>
          <md-card-content>

     <md-table v-model="list" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Urun Adı">{{ item.urun_adi }}</md-table-cell>
        <md-table-cell md-label="Fiyat">{{ item.urun_fiyat }}</md-table-cell>
        <md-table-cell md-label="#">
          <md-button class="md-just-icon md-simple md-danger" @click="siparisIptal(item)">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top" >İptal</md-tooltip>
          </md-button>
        </md-table-cell>
              

      </md-table-row>
    </md-table>
          </md-card-content>
        </md-card>
    
  </form>
</template>
<script>
import { mapState ,mapGetters, mapActions } from 'vuex';


export default {
  name: "siparis-formu",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    icecekList:{
      type:Array
    },
    yiyecekList:{
      type:Array
      
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
    return {
       toplam:0,
       aciklama:"Siparişe özel açıklamalar.",
       list:[],
       seciliIcecek:[],
       seciliYiyecek:[],
     
    };
  },
  methods:{
    ...mapActions([
      'updateSiparisToplam'
    ]),
    ekle(){
      console.log('>>>>><<');
      this.list.push(...this.seciliYiyecek);
      this.list.push(...this.seciliIcecek);
      var tht = this;
      tht.toplam = 0;
      this.list.forEach(function (item, index) {
        tht.toplam = tht.toplam+ item.urun_fiyat
      });
     this.updateSiparisToplam(this.toplam );

      
    },
    siparisIptal(selectedItem){
      var tht = this;
      this.list.forEach(function (item, index) {
        if(item.id==selectedItem.id)
           tht.list.splice(index, 1);
      });
 
        
    }
  }
};
</script>
<style></style>
