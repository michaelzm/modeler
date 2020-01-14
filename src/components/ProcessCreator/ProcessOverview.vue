<template>
    <div class="process-overview">
        <div class="top-menu-bar">
            <div class="menu-back-to-overview">
                 zur Übersicht
            </div>
        </div>
        <div class="process-editor checkered">
         
            <div class="flex-column center-hor">
                <FinishedProcessStep v-for="(item, index) in vuexActivities" :activity="item" :key="index" @open-navbar="openSidebar" @show-nextstep="showNextStep" @delete="deleteActivity"/>
                <ConnectingBlock v-for="(item, index) in connectingBlocks" :blockData="item" :key="'CB'+index" @create-new-activity="createNewActivity"/>
            </div>
            <!-- dont show if process activity is open -->
            <div class="next-step-dialog" v-if="displayNextStep && !isStepInformationVisible">
                <NextStepDialog @final-choice="createConnectingBlock"/>
            </div>
        </div>
    </div>
</template>

<script>
import FinishedProcessStep from './ProcessElements/FinishedProcessStep';
import NextStepDialog from './ProcessElements/NextStepDialog';
import ConnectingBlock from './ProcessElements/ConnectingBlock';
export default {
    name: 'ProcessOverview',
    data() {
        return {
            displayNextStep: false,
            isStepInformationVisible: false,
            connectingBlocks : [],

        }
    },
    components: {
        FinishedProcessStep,
        NextStepDialog,
        ConnectingBlock
    },
    computed: {
      vuexActivities (){
        return this.$store.state.activitiesModule.activities
      }
    },
    methods: {
        openSidebar (data) {
            switch(data) {
                case "input-data":
                    console.log("open sidebar data input")
                    break;
                case "input-it":
                    console.log("open sidebar it input")
                    break;
                case "output-data":
                    console.log("open sidebar output it");
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
            this.activities.push(activity)
        },
        createConnectingBlock(block) {
            this.connectingBlocks.push(block)
        },
        deleteActivity(id){
            for(var i = 0; i < this.activities.length; i++){
                if(this.activities[i].id === id){
                    this.activities.splice(i, 1);
                    break;
                }
            }
        },
        createNewActivity() {
            this.$emit("create-new-activity")
        },
    }
}
</script>

<style lang="scss" scoped>
    .process-overview {
        height: 100vh;
    }

    .top-menu-bar {
      height: 3vh;
      width: 100vw;
      z-index: 101;
      background-color: white;
      min-height: 40px;
      position: fixed;
      box-shadow: 0 4px 2px -2px rgba(0,0,0,0.2);
      .menu-back-to-overview {
          margin-left: 20px;
      }
      
    }

    .process-editor {
        padding-top: 7vh;
        height: 100%;
    }
</style>