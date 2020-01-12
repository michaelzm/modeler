<template>
  <div class="processCreator">
    <ProcessOverview/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewProcess from '@/components/ProcessCreator/CreateNewProcess.vue'
import ProcessOverview from '@/components/ProcessCreator/ProcessOverview.vue'
import BaseNewProcessStep from '@/components/ProcessCreator/BaseNewProcessStep.vue'

export default {
  name: 'home',
  components: {
    CreateNewProcess,
    ProcessOverview,
    BaseNewProcessStep
  }
}
</script>
