<template>
    <div class="process-overview">
        <div class="top-menu-bar">
            <div class="menu-back-to-overview">
                 zur Übersicht
            </div>
        </div>
        <div class="process-editor">
            <!-- start with blank process, only show add element -->
            <div class="add-process-step">
                <div class="svg-add-process-step"/>
            </div>
            <div class="flex-column center-hor">
                <FinishedProcessStep @open-navbar="openSidebar" @show-nextstep="showNextStep"/>
            </div>
            <div class="next-step-dialog" v-if="displayNextStep">
                <NextStepDialog/>
            </div>
        </div>
    </div>
</template>

<script>
import FinishedProcessStep from './ProcessElements/FinishedProcessStep';
import NextStepDialog from './ProcessElements/NextStepDialog';
export default {
    name: 'ProcessOverview',
    data() {
        return {
            displayNextStep: false,
            isStepInformationVisible: false,
        }
    },
    components: {
        FinishedProcessStep,
        NextStepDialog
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
        }
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

    .add-process-step {
        height: 4vh;
        margin-top: 4vh;
    }

    .svg-add-process-step {
        background-image: url(./assets/add-process-step.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }
</style>