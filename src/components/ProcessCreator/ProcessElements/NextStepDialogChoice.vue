<template>
    <div class="next-step-connector-choice" @click="choiceClicked()">
        <div class="choice-name" v-text="choiceData.text"></div>
    </div>
</template>

<script>
export default {
    name: 'NextStepDialogChoice',
    props: ["choiceData"],
    methods: {
        choiceClicked() {
            this.$emit("choice", this.choiceData.type)
        },
    }
}
</script>

<style lang="scss">
    .next-step-connector-choice {
        margin-top: 20px;
        width: 30vw;
    }

    .choice-name {
        background-color: white;
        margin-left: 10px;
        padding-left: 20px;
        padding-right: 30px;
        border: 1px solid black;
        border-radius: 15px;
        width: fit-content
    }
</style>