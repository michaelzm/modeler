import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//save activity related stuff

/**
 * ACTIVITIES STORE
 */
const activitiesModule = {
  state: {
    process: {
      activities: [
        {name:'Ware angekommen', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}, 
      ],
      name: 'Warenanlieferung',
      descirption: 'Dieser Prozess beschreibt die Handhabung von Materiallieferungen',
      category:'Logistik',
      id: "1231231231"

    }
  },
  getters: {},
  mutations: {
    addActivityMutation(state, payload){
      state.process.activities.push(payload.activity)
    }
  },
  actions: {
    addActivityAction({commit}, payload){
        commit("addActivityMutation", payload)
    }
  }
}
/**
 * GENERAL STORE
 */
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
