import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const overviewModule = {
  state: {
    activeProcessId: '',
  },
  getters: {},
  mutations: {
    setProcessActiveMutation(state, payload){
      state.activeProcessId = payload.id
    },
  },
  actions: {
    setProcessActiveAction({commit}, payload){
      commit("setProcessActiveMutation", payload)
    },
  }
}


/**
 * PROCESS STORE 
 */

 /** PROCESS SCHEME
  * {
      id: '',
      title: '',
      descirption: '',
      category: '',
      activities: [],
      start: '',
    },
  * 
  */

const processModule = {
  state: {
    processList: []
  },
  getters: {},
  mutations: {
    addProcessMutation(state, payload){
      state.processList.push(payload.process)
    },
  },
  actions: {
    addProcessAction({commit}, payload){
      commit("addProcessMutation", payload)
    },
  }
}

/**
 * ACTIVITIES STORE
 * 
 * ACTIVITY SCHEME
 * {name:'Ware angekommen', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}, 
 */
const activitiesModule = {
  state: {
    process: {
      activities: [],
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
    activities: activitiesModule,
    process: processModule,
    overview: overviewModule,
  }
})
