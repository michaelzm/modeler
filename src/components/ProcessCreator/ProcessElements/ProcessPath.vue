<template>
    <div class="process-path flex-column center-hor">
        <!-- woll contain one or n process path elements-->
        <div class="path-start">
            <div class="global-start" >
                <ProcessStart v-if="isGlobalStart"/>
            </div>
        </div>
        <ProcessPathElement v-for="(item, index) in pathElements" :pathElement="item" :key="index"/>
    </div>
</template>

<script>
import ProcessPathElement from './ProcessPathElement'
import ProcessStart from './ProcessStart'
export default {
    name: "ProcessPath",
    data () {
        return {

        }
    },
    components: {
        ProcessStart, 
        ProcessPathElement
    },
    computed: {
        pathElements() {
            return this.pathData.pathElements
        },
        pathStartElement() {
            return this.pathData.pathStartElement
        },
        isGlobalStart() {
            //get id of active process
            let pId = this.$store.state.overview.activeProcessId;
            
            //get corresponding process
            let activeProcess = this.$store.getters.getProcessById(pId);
            if(activeProcess.startElement.id === this.pathStartElement.id){
                console.log("is global start")
                return true;
            } else {
                console.log("is local start")
                return false
            }
        },
    },
    props: ["pathData"]
}
</script>

<style lang="scss">
    
</style>