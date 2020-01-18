<template>
    <div class="new-step-general-informations">
        <div class="entry step-name flex-row">
            <div class="left-text center-text-ver">
                Name des Prozessschrittes
            </div>
            <input class="right-text"></input>
        </div>

        <div class="entry step-description flex-row">
            <div class="left-text center-text-ver">
                Beschreibung des Prozessschrittes
            </div>
            <input class="right-text"></input>
        </div>

        <div class="entry step-comment flex-row">
            <div class="left-text center-text-ver">Kommentar</div>
            <input class="right-text"></input>
        </div>

        <div class="entry department flex-row">
            <div class="left-text center-text-ver">
                Auszuführende Fachabteilung
            </div>
            <input class="right-text"></input>
        </div>

        <div class="entry responsible-employee flex-row">
            <div class="left-text center-text-ver">
                Zuständiger Mitarbeiter
            </div>
            <input class="right-text"></input>
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralInformationsStep"
}
</script>

<style lang="scss" scoped>
    input {
        border: 0;
        font-size: 1rem;
        padding: 0;
    }

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
        width: 20%;
        line-height: 1.5rem;
    }
    .right-text {
        padding-left: 2vw;
        padding-right: 2vw;
        height: 100%;
        width: 80%;
    }
</style>