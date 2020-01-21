<template>
    <div class="next-step-dialog flex-column center-hor">
        <!-- no choice clicked -->
        <transition name="fade">
            <div class="first-level-choices">
                <ConnectionDialogChoice v-for="(item, index) in computeChoice()" :choiceData="item" :key="index" @choice="setConnectionType"></ConnectionDialogChoice>
            </div>
        </transition>
        <!-- end of options -->
    </div>
</template>

<script>
import ConnectionDialogChoice from './ConnectionDialogChoice.vue'
export default {
    name: 'ConnectionDialog',
    components: {
        ConnectionDialogChoice,
    },
    data() {
        return {
            nextStepType: "",
            finalStepReached: false,
            generalChoice: [
            {text: "Weiter", type: "simpleNext", blockName: "Nächter Schritt wird ausgeführt"}, 
            {text: "Prozess läuft erst weiter, wenn ein Ereignis eintritt", type: "eventNext"},
            {text: "Prozess teilt sich ab hier auf", type: "splitNext"},
            //{text: "Prozess endet hier", type: "processEnd"}
            ],
            eventChoice: [
            {text: "Ereignis entspricht einem vorher bekinanntem Zeitpunkt", type: "timeEvent", blockName: "Der nächste Schritt wird zum Zeitpunkt X ausgeführt"},
            {text: "Ereignis entspricht einem auftretenden Fehler", type: "failureEvent", blockName: "Der nächste Schritt wird bei einem auftretenden Fehler ausgeführt"},
            {text: "Ereignis entspricht einer eingehenden Nachricht", type: "messageEvent", blockName: "Der nächste Schritt wird bei einer eingehenden Nachricht ausgeführt"},
            ],
            splitChoice: [
            {text: "Alle abzweigenden Prozesspfade laufen ab hier gleichzeitig ab", type: "andSplit", blockName: "Ab hier laufen die weiteren Prozesspfade parallel ab"},
            {text: "Es wird nur einer der abzweigenden Prozesspfade abängig von einer Bedingung ausgeführt", type: "xorSplit", blockName: "Eine Bedingung entscheidet, welcher der folgenden Pfade als einziger ausgeführt wird"},
            {text: "Es können mehrere der abzweigenden Prozesspfade abhängig von einer Bedingung ausgeführt werden", type: "orSplit", blockName: "Eine Bedingung entscheidet, welche der folgenden Pfade ausgeführt werden können "},
                
            ],
        }
    },
    methods: {
        //returns the items to display as dialog choices v-for
        computeChoice() {
            if(this.nextStepType === ""){
                return this.generalChoice;
            } else if(this.nextStepType === "eventNext"){
                return this.eventChoice;
            } else if (this.nextStepType ==="splitNext"){
                return this.splitChoice;
            }
        },
        //gets called when clicked on a dialog item
        setConnectionType(selection) {
            if(!this.finalStepReached){
                //if its simple next, immediately proceed to emit event bc no subdialogs possible
                if(selection.type === "simpleNext") {
                    this.$emit("simple-connection", selection)
                //means we  need to display subdialog items
                } else {
                    switch(selection.type){
                        case "eventNext":
                            this.nextStepType = "eventNext"
                            break;
                        case "splitNext":
                            this.nextStepType = "splitNext"
                            break;
                    }
                    //prevent emitting mutliple events
                    this.finalStepReached = true;
                }
            } else {
                if (this.nextStepType === "eventNext"){
                    //means we connect activities
                    this.$emit("event-connection", selection)
                } else {
                    this.$emit("split-connection", selection)
                }
                this.resetChoices()
            }
            
        },
        resetChoices() {
            this.nextStepType = ""
            this.finalStepReached = false
        },
    }
}
</script>

<style lang="scss">
    .next-step-dialog {
        width: 100vw;

    }
</style>