<template>
    <div>
      <ProcessOverview v-if="displayProcessOverview"/>
      <CreateNewProcess v-if="displayCreateNewProcess"/>
      <BaseNewActivity v-if="displayCreateNewActivity" @finish-activity="createActivity"/>
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
            displayCreateNewActivity: true,
            displayProcessOverview: false,
            displayCreateNewProcess: false,
        }
    },
    methods: {
        createActivity() {
            let activity = {name:'Ware im System', id:'28241628', input_data:['Auftragsliste'], input_it: [], output_data:['Lieferantenbestätigung']}
            this.$store.dispatch('addActivityAction', {activity})
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