<template>
  <div class="process-overview">
    <div class="top-menu-bar">
      <div class="menu-back-to-overview">zur Übersicht</div>
    </div>
    <Sidebar v-if="this.isStepInformationVisible" />
    <div class="process-editor checkered">
      <div class="flex-row center-ver">
          <Process/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./EditorElements/Sidebar";
import ProcessActivity from "./ProcessElements/ProcessActivity";
import ConnectingBlock from "./ProcessElements/ConnectingBlock";
import Process from './ProcessElements/Process';

export default {
  name: "ProcessOverview",
  components: {
    ProcessActivity,
    ConnectingBlock,
    Sidebar,
    Process
  },
  data() {
    return {
      displayNextStep: false,
      isStepInformationVisible: false,
      connectingBlocks: []
    };
  },
  computed: {
    vuexActivities() {
      return this.$store.state.activities.process.activities;
    },
    vuexActiveProcess() {
        //get id of active process
        let pId = this.$store.state.overview.activeProcessId;
        
        //get corresponding process
        let process = this.$store.getters.getProcessById(pId);
        return process.id
    }
  },
  methods: {
    openSidebar(data) {
      switch (data) {
        case "input-data":
          console.log("open sidebar data input");
          break;
        case "input-it":
          console.log("open sidebar it input");
          break;
        case "output-data":
          console.log("open sidebar output it");
          break;
        case "activity":
          console.log("open sidebar activity");
          break;
        default:
          console.log("no such event registered");
          break;
      }

      this.isStepInformationVisible = true;
    },
    showNextStep() {
      this.displayNextStep = true;
    },
    hideNextStep() {
      this.displayNextStep = false;
    },
    addNewActivity(activity) {
      this.activities.push(activity);
    },
    createConnectingBlock(block) {
      this.connectingBlocks.push(block);
    },
    deleteActivity(id) {
      /*   for(var i = 0; i < this.activities.length; i++){
                if(this.activities[i].id === id){
                    this.activities.splice(i, 1);
                    break;
                }
            } */
    },
    createNewActivity() {
      this.$emit("create-new-activity", "createActivity");
    }
  }
};
</script>

<style lang="scss" scoped>
.process-overview {
    height: auto;
}

.top-menu-bar {
  height: 3vh;
  width: 100vw;
  z-index: 101;
  background-color: white;
  min-height: 40px;
  position: fixed;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  .menu-back-to-overview {
    margin-left: 20px;
  }
}

.process-editor {
  padding-top: 7vh;
  height: 100%;
  min-height: 100vh;
}
</style>