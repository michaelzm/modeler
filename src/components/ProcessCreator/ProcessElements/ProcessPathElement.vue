<template>
    <div class = "process-path-element flex-column center-hor">
        <!-- ALWAYS input arrow -->
        <div class="input-arrow" v-if="!isSimpleNextBlock">
            <div class="svg-connecting-arrow"></div>
        </div>

        <!-- EITHER actual process element -->
        <div class="process-activity" v-if="isActivity" >
            <ProcessActivity :activity="getActivity()" @is-selected="displayCreateNext = true" @is-unselected="displayCreateNext = false"/>
        </div>
        
        <!--OR next connector -->
        <div class="process-connecting-block" v-if="isConnectingBlock" >
            <ConnectingBlock :blockData="getConnectingBlock()" @is-selected="displayAddActivity = true" @create-new-activity="prepareCreateNewActivity"/>
        </div>

        <!-- when activity is clicked, show create connection dialog -->
        <div class="create-following-element" v-if="displayCreateNext">
            <ActivityConnectionDialog @final-choice="saveActivityConnection"/>
        </div>

        <!-- when connecting block is clicked, show option to create new activity-->
        <div class = "create-new-activity" v-if="displayAddActivity" @click="prepareCreateNewActivity">
            <div class="input-arrow">
                <div class="svg-connecting-arrow"></div>
            </div>
            Neue Aktivität hinzufügen
        </div>
    </div>
</template>

<script>
import ProcessActivity from './ProcessActivity'
import ConnectingBlock from './ConnectingBlock'
import ActivityConnectionDialog from './ActivityConnectionDialog'
import BaseNewActivity from '../BaseNewActivity'

export default {
    name: "ProcessPathElement",
    components: {
    ProcessActivity,
    ActivityConnectionDialog,
    ConnectingBlock,
    BaseNewActivity
    },
    data () {
        return {
            displayCreateNext: false,
            displayAddActivity: false,
        }
    },
    computed: {
        isActivity() {
            if(this.pathElement.currentProcessElement.type === "Activity"){
                return true
            } else {
                return false
            }
        },
        isConnectingBlock() {
            if(this.pathElement.currentProcessElement.type === "ConnectingBlock"){
                return true
            } else {
                return false
            }
        },
        /**
         * check if element is connectingblock and of type simple next, if yes, dont show arrows
         * @returns{boolean}
         */
        isSimpleNextBlock(){
            //get connecting block by id
            //check if it is simple next
            //if yes, dont show arrow
            if(this.isConnectingBlock){
                let connection = this.$store.getters.getConnectingActivitiesBlockById(this.pathElement.currentProcessElement.id)
                if(connection.type === "simpleNext"){
                    return true
                } else {
                    return false
                }
            }
        }
    },
    methods: {
        getActivity() {
            let id = this.pathElement.currentProcessElement.id
            let activity = this.$store.getters.getActivityById(id)
            return activity
        },
        saveActivityConnection(choice) {
           this.$emit("store-activity-connection", {newConnection: choice, elementId: this.pathElement.currentPathElementId})
           if(choice.type === "simpleNext"){
               //means we can trigger add new activity
               this.prepareCreateNewActivity();
           } else if(choice.type === "andSplit"){
               //split means we end t
               
           }
        },
        getConnectingBlock() {
            let id = this.pathElement.currentProcessElement.id
            let connectingBlock = this.$store.getters.getConnectingActivitiesBlockById(id)
            return connectingBlock
        },
        prepareCreateNewActivity() {
            this.$emit("update-active-process-data", this.pathElement.currentProcessElementId)
            
            //switch to acitivty creation view
            this.$store.dispatch("displayNewActivityAction")
        }
    },
    props: ["pathElement"],

}
</script>

<style lang="scss">

    .input-arrow {
        height: 4vh;
        width: 4vw;
        margin-left: auto;
        margin-right: auto;
    }

    .svg-connecting-arrow {
        background-image: url(../assets/connecting-arrow.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }
    
</style>