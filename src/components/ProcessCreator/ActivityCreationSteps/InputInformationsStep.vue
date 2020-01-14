<template>
    <div class="new-step-input-informations">
        <div class="input-data">
            <div class="description-text">
                Benötigte Daten, bspw. eine Rechnung oder Auftragsliste, spezifische Informationen bezüglich einem Objekt, …
            </div>
        </div>

        <div class="required-it">
            <div class="description-text">
                Benötigte IT-Systeme (bspw. SAP) oder Software (bspw. Excel)
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputInformationsStep"
}
</script>

<style lang="scss" scoped>
    .new-step-input-informations {
        margin: 5vh 1vw 0 1vw;
    }

    .input-data {
        width: 100%;
    }

    .required-it {
        width: 100%;
    }

    .description-text {
        width: 100%;
    }
    
    .required-it{
        margin-top: 30vh;
    }
</style>