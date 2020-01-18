<template>
    <div class = "process-path-element flex-column center-hor">
        <!-- ALWAYS input arrow -->
        <div class="input-arrow">
            <div class="svg-connecting-arrow"></div>
        </div>

        <!-- EITHER actual process element -->
        <div class="process-activity" v-if="isActivity">
            <ProcessActivity :activity="getActivity()"/>
        </div>
        
        <!--OR next connector -->
        <div class="process-connecting-block" v-if="isConnectingBlock">
            <ConnectingBlock :blockData="pathElement"/>
        </div>
    </div>
</template>

<script>
import ProcessActivity from './ProcessActivity'
import ConnectingBlock from './ConnectingBlock'

export default {
    name: "ProcessPathElement",
    data () {
        return {

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
    },
    methods: {
        getActivity() {
            let id = this.pathElement.currentProcessElement.id
            let activity = this.$store.getters.getActivityById(id)
            return activity
        }
    },
    props: ["pathElement"],
    components: {
        ProcessActivity,
    }
}
</script>

<style lang="scss">

    .input-arrow {
        height: 4vh;
        width: 4vw;
    }

    .svg-connecting-arrow {
        background-image: url(../assets/connecting-arrow.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }
    
</style>