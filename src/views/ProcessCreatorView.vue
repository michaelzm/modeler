<template>
    <div>
      <ProcessOverview v-if="displayProcessOverview" @create-new-activity="goTo"/>
      <CreateNewProcess v-if="displayCreateNewProcess" @finish-process="saveProcess"/>
      <BaseNewActivity v-if="displayCreateNewActivity" @finish-activity="saveActivity"/>
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
            displayProcessOverview: false,
            displayCreateNewProcess: true,
        }
    },
    methods: {
        saveActivity() {
            let activity = {name:'Ware im System', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}
            this.$store.dispatch('addActivityAction', {activity})
            this.goTo("displayOverview")
        },
        saveProcess() {
            //save provess to vuex
            this.goTo("displayOverview")
        },
        disableAll() {
          this.displayCreateNewActivity = false;
          this.displayProcessOverview = false;
          this.displayCreateNewProcess = false; 
        },
        goTo(functionality){
          console.log("set to")
          this.disableAll();

          switch(functionality){
            case "createActivity":
              this.displayCreateNewActivity = true;
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