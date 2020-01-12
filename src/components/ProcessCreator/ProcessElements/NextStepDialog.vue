<template>
    <div class="next-step-dialog flex-column center-hor">
        <!-- no choice clicked -->
        <div class="first-level-choices" v-if="!isChoiceClicked">
            <div class="next-step-connector-choice" @click="choiceClicked('simpleNext')">
                <div class="choice-name">
                    Weiter
                </div>
            </div>
            <div class="next-step-connector-choice"  @click="choiceClicked('eventNext')">
                <div class="choice-name">
                    Prozess läuft erst weiter, wenn ein Ereignis eintritt
                </div>
            </div>
            <div class="next-step-connector-choice" @click="choiceClicked('splitNext')">
                <div class="choice-name">
                    Prozess teilt sich ab hier auf
                </div>
            </div>
        </div>

        <!-- next step is event -->
        <div class="event-choice" v-if="isEventNext">
            <div class="next-step-connector-choice"  @click="setNextStepEvent('timeEvent')">
                <div class="choice-name">
                    Ereignis entspricht einem vorher bekanntem Zeitpunkt
                </div>
            </div>
    
            <div class="next-step-connector-choice"  @click="setNextStepEvent('failureEvent')">
                <div class="choice-name">
                    Ereignis entspricht einem auftretenden Fehler
                </div>
            </div>
    
            <div class="next-step-connector-choice"  @click="setNextStepEvent('messageEvent')">
                <div class="choice-name">
                    Ereignis entspricht einer eingehenden Nachricht
                </div>
            </div>
        </div>

        <!-- next step is split -->
        <div class="split-choice" v-if="isSplitNext">
            <div class="next-step-connector-choice"  @click="setNextStepSplit('andSplit')">
                <div class="choice-name">
                    Alle abzweigenden Prozesspfade laufen ab hier gleichzeitig ab
                </div>
            </div>

            <div class="next-step-connector-choice"  @click="setNextStepSplit('xorSplit')">
                <div class="choice-name">
                    Es wird nur einer der abzweigenden Prozesspfade abängig von einer Bedingung ausgeführt
                </div>
            </div>

            <div class="next-step-connector-choice"  @click="setNextStepSplit('orSplit')">
                <div class="choice-name">
                    Es können mehrere der abzweigenden Prozesspfade abhängig von einer Bedingung ausgeführt werden
                </div>
            </div>
        </div>
        
        <!-- end of options -->
    </div>
</template>

<script>
export default {
    name: 'NextStepDialog',
    data() {
        return {
            isChoiceClicked: false,
            isSimpleNext: false,
            isEventNext: false,
            isSplitNext: false,
            eventTime: false,
            eventFailure: false,
            eventMessage: false,
            andSplit: false,
            xorSplit: false,
            orSplit: false,
        }
    },
    methods: {
        resetChoices() {
            this.isChoiceClicked = false;
            this.isSimpleNext = false;
            this.isEventNext = false;
            this.isSplitNext = false;
            this.eventTime = false;
            this.eventFailure = false;
            this.eventMessage = false;
            this.andSplit = false;
            this.xorSplit = false;
            this.orSplit = false;
        },
        choiceClicked(choice){
            switch(choice){
                case "simpleNext":
                    this.isSimpleNext = true;
                    break;
                case "eventNext":
                    this.isEventNext = true;
                    break;
                case "splitNext":
                    this.isSplitNext = true;
                    break;
                default:
                    console.warn("no such choice defined");
                    break;
            }
            this.resetChoices();
        },
        setNextStepEvent (choice) {
            switch(choice){
                case "timeEvent":
                    this.eventTime = false;
                    break;
                case "failureEvent":
                    this.eventFailure = true;
                    break;
                case "messageEvent":
                    this.eventMessage = true;
                    break;
                default:
                    console.warn("no such event defined");
                    break;
            }

            this.isEventNext = true;
        },
        setNextStepSplit (choice) {
            switch(choice) {
                case "andSplit":
                    this.andSplit = true;
                    break;
                case "xorSplit":
                    this.xorSplit = true;
                    break;
                case "orSplit":
                    this.orSplit = true;
                    break;
                default:
                    console.warn("no such split defined");
                    break;
            }

            this.isSplitNext = true;
        }
    }
}
</script>

<style lang="scss">
    .next-step-dialog {
        width: 100vw;

    }

    .next-step-connector-choice {
        margin-top: 20px;
        width: 30vw;
    }

    .choice-name {
        margin-left: 10px;
        padding-left: 20px;
        padding-right: 30px;
        border: 1px solid black;
        border-radius: 15px;
        width: fit-content
    }
</style>