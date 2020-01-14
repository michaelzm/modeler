<template>
    <div>
        <div class="process-overview-container" v-if="displayProcessOverview">
            <ProcessOverview @create-new-activity="setTo('createActivity')"/>
        </div>
        <div class="create-new-process-container" v-if="displayCreateNewProcess">
            <CreateNewProcess/>
        </div>
        <div class="create-new-activity-container" v-if="displayCreateNewActivity">
            <BaseNewActivity/>
        </div>
    </div>
</template>

<script>
import ProcessOverview from '@/components/ProcessCreator/ProcessOverview'
import CreateNewProcess from '@/components/ProcessCreator/CreateNewProcess'
import BaseNewActivity from '@/components/ProcessCreator/BaseNewActivity'
export default {
    name: "ProcessCreatorView",
    components: {
        ProcessOverview,
        CreateNewProcess,
        BaseNewActivity
    },
    data() {
        return {
            displayCreateNewActivity: false,
            displayProcessOverview: true,
            displayCreateNewProcess: false,
        }
    },
    methods: {
        createActivity() {
            this.displayCreateNewActivity = true;
        },
        disableAll() {
          this.displayCreateNewActivity = false;
          this.displayProcessOverview = false;
          this.displayCreateNewProcess = false; 
        },
        setTo(functionality){
          this.disableAll();

          switch(functionality){
            case "createActivity":
              ths.displayCreateNewActivity = true;
              break;
            case "createProcess":
              this.displayCreateNewProcess = true;
              break;
            case "displayOverview":
              this.displayProcessOverview = true;
              break;
            default:
              break;
          }

        }
    }
}
</script>

<style lang="scss">
    
</style>