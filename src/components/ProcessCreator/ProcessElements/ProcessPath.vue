<template>
    <div class="process-path flex-column center-hor">
        <!-- woll contain one or n process path elements-->
        <ProcessPathElement v-for="(item, index) in pathElements" :pathElement="item" :key="index" 
        @update-active-process-data="updateProcessData" @store-activity-connection="createNewConnectionBlock"/>
    </div>
</template>

<script>
import uuid from 'uuid'
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
    },
    methods: {
        createNewConnectionBlock(data) {
            console.log(data)
            let connectingBlock = {
                id: uuid.v4(),
                inputActivityIds: null,
                outputPathIds: null,
                type: data.newConnection.type,
                value: null,
                text: data.newConnection.text,
                displayText: data.newConnection.blockName
            }
            //create the connection
            this.$store.dispatch("addConnectingActivitiesBlockAction", {connectingBlock})

            //insert connection into path
            let dataForInsert = {
                elementId: data.elementId, 
                type: "ConnectingBlock",
                id: connectingBlock.id
            }
            this.insertNewConnectionBlock(dataForInsert)
        },
        insertNewConnectionBlock(data) {
            let currentPathElement
            let elementIdx;

            //first get element and idx after which new connection will get inserted
            for(let idx = 0; idx < this.pathData.pathElements.length; idx++ ){
                if(this.pathData.pathElements[idx].currentPathElementId === data.elementId){
                    elementIdx = idx 
                }
            }
            
            let pathElement = {
                prevPathElementId: null,
                currentPathElementId: uuid.v4(),
                currentProcessElement: {
                    type: data.type,
                    id: data.id,
                },
                nextPathElementId: null,
            }
            //insert new block into existing path after elemet id
            let insertData = {
                processPathId: this.pathData.id,
                pathElement: pathElement
            }
            this.$store.dispatch("addProcessPathElementAction", insertData)
        },
        updateProcessData(activePathElementId){
            this.$store.dispatch("setActiveProcessPathAction", {activePathId: this.pathData.id})
        }
    },
    props: ["pathData"]
}
</script>

<style lang="scss">
    
</style>