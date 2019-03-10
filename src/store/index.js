import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex) 

const state={
    siparisToplam:'0',
};
const getters={
    siparisToplamGetir(state){
        return state.siparisToplam +' TL';
    }

};
const mutations={
    setSiparisToplam(state,toplamTutar){
        state.siparisToplam = toplamTutar;
    }
};
const actions={
    updateSiparisToplam({commit},toplamTutar){
        commit('setSiparisToplam',toplamTutar);
        
    }

};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default  store;