import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//save activity related stuff

/**
 * ACTIVITIES STORE
 */
const activitiesModule = {
  state: {
    count: 2,
    activities: [
      {name:'Ware angekommen', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}, 
  ],
  },
  getters: {},
  mutations: {
    addActivityMutation(state, payload){
      state.activities.push(payload.activity)
    }
  },
  actions: {
    addActivityAction({commit}, payload){
        commit("addActivityMutation", payload)
    }
  }
}

export default new Vuex.Store({
  state: {
    count: 12,
  },
  getters: {
  },
  mutations: {
    increment(state, payload){
      state.count += payload.amount
    }
  },
  actions: {
    increase({ commit }, payload){
      commit("increment", payload)
    }
  },
  modules: {
    activitiesModule: activitiesModule,
  }
})
