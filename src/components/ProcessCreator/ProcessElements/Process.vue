<template>
    <div class = "process">
        <!-- always start the process with its start element which is always defined -->
        <ProcessStart/>
        <div class="concurrent">
            <!-- all paths with the same start element run parallel -->
        </div>
        <ProcessPath v-for="(item, index) in processPaths()" :pathData="item" :key="index"/>
    </div>
</template>

<script>
import ProcessStart from './ProcessStart'
import ProcessPath from './ProcessPath'
export default {
    data() {
        return {

        }
    },
    components: {
        ProcessStart,
        ProcessPath
    },
    methods: {
        activeProcess() {
        //get id of active process
        let pId = this.$store.state.overview.activeProcessId;
        
        //get corresponding process
        let activeProcess = this.$store.getters.getProcessById(pId);
        return activeProcess
        },
        processPaths() {
            console.log("getting processPaths")
            let pathIds = this.activeProcess().processPathList;
            let paths = [];
            
            //get all paths linked to the active process
            pathIds.forEach(id => {
                paths.push(this.$store.getters.getProcessPathById(id))
            })

            return paths;
        }
    },
    computed: {

    },

}
</script>

<style lang="scss">
    .process {
        padding-bottom: 50%;
    }
</style>