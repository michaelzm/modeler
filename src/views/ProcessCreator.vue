<template>
  <div class="processCreator">
    <ProcessOverview/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewProcess from '@/components/ProcessCreator/NewProcess.vue'
import ProcessOverview from '@/components/ProcessCreator/ProcessOverview.vue'

export default {
  name: 'home',
  components: {
    NewProcess,
    ProcessOverview
  }
}
</script>
