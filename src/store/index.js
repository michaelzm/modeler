import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//contains all the paths
//doubly linked list, every element knows it pre and post element 
const processPathModule = {
  state: {
    processPaths: [
      {
        id: '124',
        // element zb start oder aufteilung
        pathStartElement: {
          id: "12312231",
          name: "Start"
        },
        //
        pathEndElement: {
          id: '1231231',
          name: "Endelement"
        },
        //
        pathElements: [
          { prevPathElementId: '0',
            currentPathElementId: '1',
            currentProcessElement: {
              type: "Activity",
              id: '17216-1481271-2615262',
            },
            nextPathElementId: '2'
          },
          { prevPathElementId: '1',
            currentPathElementId: '2',
            currentProcessElement: {
              type: "ConnectingBlock",
              id: '81725-16261-26192',
            },
            nextPathElementId: ''
          }
        ]
      }
    ],
    activePathId: null,
  },
  getters: {
    getProcessPathById: (state) => (id) => {
      return state.processPaths.find(path => path.id === id)
    }
  },
  mutations: {
    addProcessPathMutation(state, payload) {
      state.processPaths.push(payload.processPath)
    },
    addProcessPathElementMutation(state, payload){
        let path = state.processPaths.find(path => path.id === payload.processPathId)
        path.pathElements.push(payload.pathElement)
    },
    setActiveProcessPathMutation(state, payload){
      state.activePathId = payload.activePathId
    }
  },
  actions: {
    addProcessPathAction({ commit }, payload) {
      commit("addProcessPathMutation", payload)
    },
    addProcessPathElementAction({commit}, payload){
      commit("addProcessPathElementMutation", payload)
    },
    setActiveProcessPathAction({commit}, payload){
      commit("setActiveProcessPathMutation", payload)
    }
  }

}
// connectingblock und acvitiy evtl in eigemen store zusammenfassen
const connectingBlockModule = {
  state: {
    connectingBlocks: [{
      //
      id: '131231',
      //
      inputActivityIds: ['1'],
      //
      outputPathIds: ['1', '2'],
      //
      type: "time",
      //
      value: "5 Tage",
      //
      text: "Der Prozess läuft in 5 Tagen weiter"
    }]
  },
  getters: {
    getConnectingBlockById: (state) => (id) => {
      let block = state.connectingBlocks.find(block => block.id === id)
      return block;
    }
  },
  mutations: {
    addConnectingBlockMutation(state, payload){
      state.connectingBlocks.push(payload.connectingBlock)
    },
  },
  actions: {
    addConnectingBlockAction({commit}, payload){
      commit("addConnectingBlockMutation", payload)
    }
  }
}

const activityModule = {
  state: {
    activities: [{
      name: "Ware angekommen",
      //
      id: '1',
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
      id: '2',
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
  getters: {
    getActivityById: (state) => (id) => {
      return state.activities.find(activity => activity.id === id)
    }
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
        //
        description: "Dieser Prozess beschreibt die ..",
        //
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
      processPathList: []
    }]
  },
  getters: {
    getProcessById: (state) => (id) => {
      return state.processList.find(process => process.id === id)
    }
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

const processCreator = {
  state: {
    displayNewActivity: false,
    displayProcessOverview: false,
    displayCreateNewProcess: true,
  },
  mutations: {
    hideNewActivityMutation(state){
      state.displayNewActivity = false
    },
    displayNewActivityMutation(state){
      state.displayCreateNewProcess = false,
      state.displayProcessOverview = false,
      state.displayNewActivity = true
    },
    displayProcessOverviewMutation(state){
      state.displayCreateNewProcess = false,
      state.displayProcessOverview = true
      state.displayNewActivity = false
    },
    displayNewProcessMutation(state){
      state.displayCreateNewProcess = true,
      state.displayProcessOverview = false,
      state.displayNewActivity = false
    }
  },
  actions: {
    displayNewActivityAction({commit}){
      commit("displayNewActivityMutation")
    },
    displayProcessOverviewAction({commit}){
      commit("displayProcessOverviewMutation")
    },
    displayNewProcessAction({commit}){

    },
    hideNewActivityAction({commit}){
      commit("hideNewActivityMutation")
    }
  }
}

/**
 * GENERAL STORE
 */
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    overview: overviewModule,
    activityStore: activityModule,
    connectingBlockStore: connectingBlockModule,
    processStore: processModule,
    processPathStore: processPathModule,
    processCreatorStore: processCreator
  }
})
