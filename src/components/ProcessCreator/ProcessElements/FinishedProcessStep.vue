<template>
<div class="finished-process-step" v-bind:class="{ selected: isSelected }" @click="toggleStepActive">
    <div class="delete-icon">
        <div class="svg-delete-process-step" v-if="this.isSelected">

        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "FinishedProcessStep",
    data() {
        return {
            isSelected: false
        }
    },
    methods: {
        toggleStepActive(e) {
            this.isSelected = !this.isSelected;
        }
    }
}
</script>
<style lang="scss">

    .finished-process-step{
        position: relative;
        top: 10vh;
        left: 30vw;
        width: 25vw;
        max-width: 200px;
        height: 10vh;
        max-height: 100px;
        border: 1px solid black;
        border-radius: 15px;
    }

    .selected {
        border-color: red;
    }

    .delete-icon {
        width: 3vw;
        height: 3vw;
        position: relative;
        top: -2vh;
    }

    .svg-delete-process-step {
        background-image: url(../assets/delete-process-step.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }

</style>