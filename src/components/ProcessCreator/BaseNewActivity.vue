<template>
<div class="new-activity-container checkered flex-column center-hor center-ver">
    <div class="add-activity flex-column">
        <div class="header flex-column center-hor">
            <h3>Prozessschritt hinzufügen </h3>
            <div class="line"></div>
            <div class="current-position-indicator flex-row space-between">
                <div class="step flex-column center-hor">
                    <div class="circle" v-bind:class="{circle_1: circleActive(1)}"/>
                    <div class="step-title">Allgemeine Informationen</div>
                </div>

                <div class="step flex-column center-hor">
                    <div class="circle" v-bind:class="{circle_2: circleActive(2)}"/>
                    <div class="step-title">Benötigter Input</div>
                </div>

                <div class="step flex-column center-hor">
                    <div class="circle" v-bind:class="{circle_3: circleActive(3)}"/>
                    <div class="step-title">Ergebnis des Prozessschrittes</div>
                </div>


            </div>
        </div>
        <div class="current-step-informations">
            <!-- component changes in here -->
            <div class="general-informations" v-if="inputStep===1">
                <GeneralInformationsStep/>
            </div>
            <div class="input-informations" v-if="inputStep===2">
                <InputInformationsStep/>
            </div>
            <div class="output-informations" v-if="inputStep===3">
                <OutputInformationsStep/>
            </div>
        </div>
        <div class="menu-bottom flex-row space-between">
            <div class="button-cancel" v-if="inputStep === 1" @click="cancel">
                abbrechen
            </div>
            <div class="button-go-prev" @click="prevStep" v-if="inputStep > 1">
                zurück
            </div>
            <div class="button-go-next" @click="nextStep" v-if="inputStep < 3">
                weiter
            </div>
            <div class="button-finish" @click="finishActivity" v-if="inputStep === 3">
                Aktivität erstellen
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GeneralInformationsStep from './ActivityCreationSteps/GeneralInformationsStep'
import InputInformationsStep from './ActivityCreationSteps/InputInformationsStep'
import OutputInformationsStep from './ActivityCreationSteps/OutputInformationsStep'
import uuid from 'uuid'
export default {
    name: "BaseNewActivity",
    components: {
        GeneralInformationsStep,
        InputInformationsStep,
        OutputInformationsStep
    },
    data () {
        return {
            inputStep: 1,
            generalInformations: {
                name: '',
                description: '',
                comment: '',
                department:'',
                employee: '',
            },
            inputInformations: {
                requiredData: [],
                requiredIt: [],
            },
            outputInformations: {
                createdData: [],
            },
            createdActivity: null,
            
        }
    },
    methods: {
        nextStep() {
            this.inputStep++;
            //when moving to the next step, move the colored circle by one
        },
        prevStep() {
            this.inputStep--;
            //when moving to the next step, move the colored circle by one
        },
        cancel () {
            this.$store.dispatch("displayProcessOverviewAction")
        },
        circleActive(idx){
            if(idx === this.inputStep){
                return true;
            } else {
                return false;
            }
        },
        storeActivity() {
            let activity = {
                name: "Ware da",
                id: uuid.v4(),
                input_data: [{}],
                input_it: [{}],
                output_data: [{}]
            }
            this.$store.dispatch("addActivityAction", {activity})
            this.createdActivity = activity;
        },
        finishActivity() {
            this.storeActivity();
            this.addActivityToPath();
            this.$store.dispatch("displayProcessOverviewAction")
        },
        addActivityToPath() {
            let activePathId = this.$store.state.processPathStore.activePathId
            let addElementInformations =  {
                processPathId: activePathId,
                pathElement: {
                    prevPathElementId: null,
                    currentPathElementId: uuid.v4(),
                    currentProcessElement: {
                        type: "Activity",
                        id:this.createdActivity.id
                    },
                    nextPathElementId: null
                }
            }

            this.$store.dispatch("addProcessPathElementAction", addElementInformations)
        }
    }
}
</script>

<style lang="scss" scoped>
.new-activity-container {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    min-width: 100vw;
}

.add-activity{
    width: 80vw;
    height: 80%;
    min-height: 80vh;
    background-color: white;
    box-shadow: 0 5px 10px rgba(154,160,185,.1), 0 15px 40px rgba(166,173,201,.2);
    border-radius: 15px;
}
    .header {
        width: 100%;
    }
    
    .current-position-indicator {
        margin-top: 5vh;
        height: 10vh;
        width: 70vw;
    }

    .step {
        width: 15vw;
        height: 15vh;
    }
    .step-title{
        text-align: center;
        line-height: 1.5rem;
    }

    .circle {
        height: 5vh;
        width: 5vh;
        border: 1px solid black;
        border-radius: 100%;
        z-index: 100;
        background-color: white;
    }

    .circle_1 {
        background-color: red;
    }

    .circle_2 {
        background-color: rgb(29, 255, 8);
    }

    .circle_3 {
        background-color: rgb(24, 28, 250);
    }

    .line {
        top: 8vh;
        position: relative;
        height: 0.5vh;
        width: 50vw;
        background-color: grey;
    }

    .menu-bottom {
        flex-grow: 1;
        align-items: flex-end;
        width: inherit;

        .button-cancel,
        .button-go-prev{
            margin-left: 3vw;
        }

        .button-finish,
        .button-go-next {
            margin-right: 3vw;
        }
    }

</style>