<template>
    <div class="add-process-step">
        <div class="header flex-column center-hor">
            <h3>Prozessschritt hinzufügen </h3>
            <div class="line"></div>
            <div class="current-position-indicator flex-row space-between">
                <div class="step flex-column center-hor">
                    <div class="circle circle-1"/>
                    <div class="step-title">Allgemeine Informationen</div>
                </div>

                <div class="step flex-column center-hor">
                    <div class="circle circle-2"/>
                    <div class="step-title">Benötigter Input</div>
                </div>

                <div class="step flex-column center-hor">
                    <div class="circle circle-3"/>
                    <div class="step-title">Ergebnis des Prozessschrittes</div>
                </div>


            </div>
        </div>
        <div class="current-step-informations">
            <!-- component changes in here -->
            <OutputInformationsStep></OutputInformationsStep>
        </div>
        <div class="menu-bottom flex-row space-between">
            <div class="button-go-prev">
                zurück
            </div>
            <div class="button-go-next">
                weiter
            </div>
        </div>
    </div>
</template>

<script>
import GeneralInformationsStep from './ProcessSteps/GeneralInformationsStep'
import InputInformationsStep from './ProcessSteps/InputInformationsStep'
import OutputInformationsStep from './ProcessSteps/OutputInformationsStep'

export default {
    name: "BaseNewProcessStep",
    components: {
        GeneralInformationsStep,
        InputInformationsStep,
        OutputInformationsStep
    },
    data () {
        return {
            circle: 1,
        }
    },
    methods: {
        nextStep() {
            //when moving to the next step, move the colored circle by one
        }
    }
}
</script>

<style lang="scss" scoped>

.add-process-step{
    width: 100vw;
}
    .header {
        width: 100%;
    }
    
    .current-position-indicator {
        margin-top: 5vh;
        height: 10vh;
        width: 90vw;
    }

    .step {
        width: 15vw;
        height: 15vh;
    }
    .step-title{
        text-align: center;
    }

    .circle {
        height: 5vh;
        width: 5vh;
        border: 1px solid black;
        border-radius: 100%;
        z-index: 100;
        background-color: white;
    }

    .circle-1 {
        background-color: red;
    }

    .line {
        top: 8vh;
        position: relative;
        height: 0.5vh;
        width: 75vw;
        background-color: grey;
    }

    .menu-bottom {
        width: 100%;
        bottom: 0;
        position: fixed;

        .button-go-prev{
            margin-left: 3vw;
        }
        .button-go-next {
            margin-right: 3vw;
        }
    }

</style>