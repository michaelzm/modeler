import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//contains all the paths
const processPathModule = {
  state: {
    processPaths: [
      {
        pathId: 124,
        //
        startAfterElementId: 1231,
        //
        endInElementId: 1231231,
        //
        pathElements: [
          { activityId: 1, connectingBlockId: 1},
          { activityId: 2, connectingBlockId: 2},
        ]
      }
    ]
  },
  mutations: {
    addProcessPathMutation(state, payload) {
      state.processPaths.push(payload.processPath)
    }
  },
  actions: {
    addProcessPathAction({ commit }, payload) {
      commit("addProcessPathMutation", payload)
    }
  }

}

const connectingBlockModule = {
  state: {
    connectingBlocks: [{
      //
      id: 131231,
      //
      inputActivityIds: [1],
      //
      outputPathIds: [1, 2],
      //
      type: "time",
      //
      value: "5 Tage",
      //
      text: "Der Prozess läuft in 5 Tagen weiter"
    }]
  }
}

const activityModule = {
  state: {
    activities: [{
      name: "Ware angekommen",
      //
      activityId: 1,
      //
      input_data: [{
        name: "Auftragsliste",
        description: "Diese Liste beinhaltet",
      }],
      //
      input_it: [{
        name: "SAP Simple Finance"
      }],
      //
      output_data: [{
        name: "Lieferantenbestätigung",
        description: "Diese Bestätigung umfasst.."
      }]
    },
    {
      name: "Ware weiterverarbeiten",
      //
      activityId: 2,
      //
      input_data: [{
        name: "Warenliste",
        description: "Diese Liste beinhaltet..",
      }],
      //
      input_it: [],
      //
      output_data: []
    }]
  },
  mutations: {
    addActivityMutation(state, payload) {
      state.activities.push(payload.activity)
    }
  },
  actions: {
    addActivityAction({ commit }, payload) {
      commit("addActivityMutation", payload)
    }
  }
}

const processModule = {
  state: {
    processList: [{
      //
      id: 1231,
      //
      commonData: {
        title: "Auftragsabwicklung",
        description: "Dieser Prozess beschreibt die ..",
        category: "Logistik"
      },
      //
      startElement: {
        id: 10, name: "Auftrag geht ein"
      },
      //
      endElement: {
        id: 20, name: "Ware verlässt das Lager"
      },
      //
      processPathList: [124]
    }]
  },
  mutations: {
    addProcessMutation(state, payload) {
      state.processList.push(payload.newProcess)
    }
  },
  actions: {
    addProcessAction({ commit }, payload) {
      commit("addProcessMutation", payload)
    }
  }
}

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
 * ACTIVITIES STORE
 * 
 * ACTIVITY SCHEME
 * {name:'Ware angekommen', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}, 
 */
const activitiesModule = {
  state: {
    process: {
      activities: [
       
      ],
      name: 'Warenanlieferung',
      description: 'Dieser Prozess beschreibt die Handhabung von Materiallieferungen',
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
    overview: overviewModule,
    activityStore: activityModule,
    processStore: processModule,
    processPathStore: processPathModule,
    connectingBlockStore: connectingBlockModule
  }
})
