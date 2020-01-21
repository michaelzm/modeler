<template>
    <div class="process-path flex-column center-hor">
        <!-- woll contain one or n process path elements-->
        <ProcessPathElement v-for="(item, index) in pathElements" :pathElement="item" :key="index" 
        @update-active-process-data="updateProcessData" 
        @store-activity-connection="createNewActivityConnectionBlock"
        @store-path-connection="createNewPathConnectionBlock"
        />

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
        createNewActivityConnectionBlock(data) {
            console.log("create new activity connection in store")
            let connectingBlock = {
                id: uuid.v4(),
                inputActivityId: null,
                outputPathId: null,
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

            console.log("insert the created activity connection into the path")
            this.insertNewActivityConnectionBlock(dataForInsert)
        },
        createNewPathConnectionBlock(data){
            console.log("end current path in new path connection")
            console.log("create new path and set start also to new path connection")
            //means we end current path and connect its end element to new connection block
        },
        insertNewActivityConnectionBlock(data) {
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