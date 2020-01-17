<template>
    <div class = "process-path-element flex-column center-hor">
        <!-- ALWAYS input arrow -->
        <div class="input-arrow">
            <div class="svg-connecting-arrow"></div>
        </div>

        <!-- ALWAYS actual process element -->
        <ProcessActivity/>
        
        <!--OPTIONAL next connector -->
        <ConnectingBlock/>
    </div class = "process-path-element">
</template>

<script>
import ProcessActivity from './ProcessActivity'
import ConnectingBlock from './ConnectingBlock'

export default {
    name: "ProcessPathElement",
    data () {
        return {

        }
    },
    props: ["processPathElementData"],
    components: {
        ProcessActivity,
    }
}
</script>

<style lang="scss">

    .input-arrow {
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
    
</style>