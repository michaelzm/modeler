<template>
    <div class="new-step-general-informations">
        <div class="entry step-name">
            <div class="left-text center-text-ver">
                Name des Prozessschrittes
            </div>
        </div>

        <div class="entry step-description">
            <div class="left-text center-text-ver">
                Beschreibung des Prozessschrittes
            </div>
        </div>

        <div class="entry step-comment">
            <div class="left-text center-text-ver">
                Kommentar
            </div>
        </div>

        <div class="entry department">
            <div class="left-text center-text-ver">
                Auszuführende Fachabteilung
            </div>
        </div>

        <div class="entry responsible-employee">
            <div class="left-text center-text-ver">
                Zuständiger Mitarbeiter
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralInformationsStep"
}
</script>

<style lang="scss" scoped>

    .new-step-general-informations {
        margin: 5vh 1vw 0 1vw;
    }

    .entry {
        height: 10vh;
        width: 100%;
        border-bottom: 1px solid black;
    }

    .entry:first-child {
        border-top: 2px solid black;
    }

    .entry:last-child {
        border-bottom: 2px solid black;
    }

    .left-text{
        height: 100%;
        border-right: 1px solid black;
        width: 20vw;
    }
</style>