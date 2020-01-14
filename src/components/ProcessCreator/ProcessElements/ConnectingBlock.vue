<template>
    <div class ="connecting-block flex-column center-hor">
        <div class="input-arrow">
            <div class="svg-connecting-arrow"></div>
        </div>
            <div class="connecting-to-next-step" v-if="shouldDisplayBlockData()">
                <div class="block-element" v-text="blockData.blockName">
                </div>
            </div>
            <div class="output-arrow" v-if="shouldDisplayBlockData()">
                <div class="svg-connecting-arrow"></div>
            </div>
         <!-- option to add next step -->
        <div class="add-process-step">
            <div class="svg-add-process-step"/>
        </div>
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
        }
    },
}
</script>

<style lang="scss">
    .connecting-to-next-step {
        border: 1px solid rgb(0, 174, 243);
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

    .input-arrow {
        height: 4vh;
        width: 4vw;
    }

    .output-arrow {
        height: 4vh;
        width: 4vw;
    }

    .svg-connecting-arrow {
        background-image: url(../assets/connecting-arrow.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
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