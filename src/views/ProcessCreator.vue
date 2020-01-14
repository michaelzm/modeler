<template>
  <div class="processCreator">
    <ProcessOverview/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewProcess from '@/components/ProcessCreator/CreateNewProcess.vue'
import ProcessOverview from '@/components/ProcessCreator/ProcessOverview.vue'
import BaseNewActivity from '@/components/ProcessCreator/BaseNewActivity.vue'

export default {
  name: 'home',
  components: {
    CreateNewProcess,
    ProcessOverview,
    BaseNewActivity
  }
}
</script>
