<template>
    <div class="process-overview">
        <div class="top-menu-bar">
            <div class="menu-back-to-overview">
                 zur Übersicht
            </div>
        </div>
        <div class="process-editor">
            <!-- start with blank process, only show add element -->
            <div class="add-process-step">
                <div class="svg-add-process-step"/>
            </div>
            <FinishedProcessStep></FinishedProcessStep>
        </div>
    </div>
</template>

<script>
import FinishedProcessStep from './ProcessElements/FinishedProcessStep'
export default {
    name: 'ProcessOverview',
    components: {
        FinishedProcessStep
    }
}
</script>

<style lang="scss">
    .top-menu-bar {
      height: 3vh;
      border-bottom: 1px solid black;  
    }

    .add-process-step {
        height: 4vh;
        width: 4vh;
        margin-top: 4vh;
    }

    .svg-add-process-step {
        background-image: url(./assets/add-process-step.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }
</style>