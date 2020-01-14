<template>
    <div class="process-overview">
        <div class="top-menu-bar">
            <div class="menu-back-to-overview">
                 zur Übersicht
            </div>
        </div>
        <div class="process-editor">
         
            <div class="flex-column center-hor">
                <FinishedProcessStep v-for="(item, index) in activities" :activity="item" :key="index" @open-navbar="openSidebar" @show-nextstep="showNextStep"/>
                <ConnectingBlock v-for="(item, index) in connectingBlocks" :blockData="item" :key="'CB'+index"/>
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
            activities: [
                {name:'Ware angekommen', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}, 
            ],
            connectingBlocks : [],

        }
    },
    components: {
        FinishedProcessStep,
        NextStepDialog,
        ConnectingBlock
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
    }
}
</script>

<style lang="scss">

    .top-menu-bar {
      height: 3vh;
      min-height: 40px;
      border-bottom: 1px solid black;
      .menu-back-to-overview {
          margin-left: 20px;
      }
    }
</style>