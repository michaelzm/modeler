<template>
    <div class="create-new-process">
        <div class="top-part flex-column center-hor">
            <div class="header">
                <h3>Neuer Prozess</h3>
            </div>
            <div class="new-process-illustration">
                <div class="process-image"></div>
            </div>
            <div class="divider"></div>
        </div>
        <div class="process-general-information flex-column center-hor">
            <div class="process-title flex-row space-between">
                <div class="input-indicator">Titel</div>
                <div class="input-title">
                
                </div>
            </div>
            <div class="process-description flex-row space-between">
                <div class="input-indicator">Beschreibung</div>
                <div class="input-description">

                </div>
            </div>
            <div class="process-category flex-row space-between">
                <div class="input-indicator">Kategorie</div>
                <div class="input-category">

                </div>
            </div>
        </div>
        <div class="menu-go-next">
            weiter >
        </div>
    </div>
</template>

<script>
export default {
    name: "NewProcess"
}
</script>

<style lang="scss">
    .divider {
        width: 80vw;
        border-bottom: 1px solid black;
        margin-top: 5vh;
    }
    .new-process-illustration {
        margin-top: 5vh;
        height: 10vh;
        width: 50vw;
    }
    .process-image {
        background-image: url(./assets/illustration-new-process.svg);
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
    }

    .process-title {
        margin-top: 5vh;
        width: 50vw;

        .input-title {
            border: 1px solid black;
            border-radius: 20px;
            height: 5vh;
            width: 35vw;
            background-color: #F8F8F8;
        }
    }

    .process-description {
        margin-top: 5vh;
        width: 50vw;

            .input-description {
            border: 1px solid black;
            border-radius: 20px;
            height: 20vh;
            width: 35vw;
            background-color: #F8F8F8;
        }
    }

    .process-category {
        margin-top: 5vh;
        width: 50vw;


        .input-category {
            border: 1px solid black;
            border-radius: 20px;
            height: 5vh;
            width: 35vw;
            background-color: #F8F8F8;
        }
    }

    .menu-go-next {
        position: absolute;
        bottom: 4vh;
        right: 4vh;
    }
    
</style>