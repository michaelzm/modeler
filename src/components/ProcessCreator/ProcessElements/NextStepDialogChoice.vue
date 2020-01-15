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
        border: 1px solid rgb(212, 212, 212);
        box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
        border-radius: 15px;
        width: fit-content
    }
</style>