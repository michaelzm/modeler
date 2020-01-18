<template>
    <div class ="connecting-block flex-column center-hor">
            <div class="connecting-to-next-step" v-if="shouldDisplayBlockData()" @click="selectBlock">
                <div class="block-element" v-text="blockData.displayText">
                </div>
            </div>
<!--             <div class="add-new-activity" v-if="!shouldDisplayBlockData()" @click="createNewActivity()">
                add new activity
            </div> -->
    </div>
</template>

<script>
export default {
    name: "ConnectingBlock",
    props: ["blockData"],
    methods: {
        shouldDisplayBlockData() {
            if(this.blockData.type !== "simpleNext"){
                return true;
            } else {
                return false;
            }
        },
        createNewActivity() {
            this.$emit("create-new-activity")
        },
        selectBlock() {
            this.$emit("is-selected")
        }
    },
}
</script>

<style lang="scss">
    .connecting-to-next-step {
        border: 1px solid rgb(0, 174, 243);
        background-color:rgb(0, 174, 243);
        border-radius: 50px;
        padding-left: 1vw;
        padding-right: 1vw;
        width: fit-content
    }
    
    .block-element {
        width: fit-content;
    }

    .connecting-block {
        width: fit-content;
    }


    .output-arrow {
        height: 4vh;
        width: 4vw;
    }

    .add-process-step {
        height: 4vh;
        width: 4vh;
    }

    .svg-add-process-step {
        background-image: url(../assets/add-process-step.svg);
        background-repeat: no-repeat;
        height: 100%;
        background-size: 100% 100%;
    }
</style>