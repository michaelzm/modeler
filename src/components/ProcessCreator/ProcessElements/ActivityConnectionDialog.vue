<template>
    <div class="next-step-dialog flex-column center-hor">
        <!-- no choice clicked -->
        <transition name="fade">
            <div class="first-level-choices">
                <ActivityConnectionDialogChoice v-for="(item, index) in computeChoice()" :choiceData="item" :key="index" @choice="setActivityConnectionType"></ActivityConnectionDialogChoice>
            </div>
        </transition>
        <!-- end of options -->
    </div>
</template>

<script>
import ActivityConnectionDialogChoice from './ActivityConnectionDialogChoice.vue'
export default {
    name: 'ActivityConnectionDialog',
    components: {
        ActivityConnectionDialogChoice,
    },
    data() {
        return {
            nextStepType: "",
            finalNextStepType: "",
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
                
            ]
        }
    },
    methods: {
        computeChoice() {
            if(this.nextStepType === ""){
                return this.generalChoice;
            } else if(this.nextStepType === "eventNext"){
                return this.eventChoice;
            } else if (this.nextStepType ==="splitNext"){
                return this.splitChoice;
            }
        },
        setActivityConnectionType(type) {
            this.nextStepType = type;
            if(["eventNext", "splitNext"].indexOf(type) < 0){
                this.finalNextStepType = type

                //get the choice obj from one of the three arrays

                let choice = undefined;
                for(let i = 0; i < this.generalChoice.length; i++){
                    if(this.generalChoice[i].type === type){
                        choice = this.generalChoice[i];
                    }
                }
                for(let i = 0; i < this.eventChoice.length; i++){
                    if(this.eventChoice[i].type === type){
                        choice = this.eventChoice[i];
                    }
                }
                for(let i = 0; i < this.splitChoice.length; i++){
                    if(this.splitChoice[i].type === type){
                        choice = this.splitChoice[i];
                    }
                }
                this.$emit("final-choice", choice);
            }
        },
        resetChoices() {
            this.isChoiceClicked = false;
        },
    }
}
</script>

<style lang="scss">
    .next-step-dialog {
        width: 100vw;

    }
</style>