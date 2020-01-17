<template>
    <div class="create-new-process">
        <div class="top-part flex-column center-hor">
            <div class="header">
                <h3>Neuen Prozess erstellen</h3>
            </div>
            <div class="new-process-illustration">
                <div class="svg-process-image"></div>
            </div>
            <div class="divider"></div>
        </div>
        <div class="process-general-information flex-column center-hor">
            <div class="process-title flex-row space-between">
                <div class="input-indicator">Prozessname</div>
                <input v-model="form.processTitle" class="input-title" type="text" placeholder="Warenanlieferung"></input>
            </div>
            <div class="process-description flex-row space-between">
                <div class="input-indicator">Beschreibung</div>
                <textarea v-model="form.processDescription" class="input-description" type="text" placeholder="Bei diesem Prozess.."></textarea>
            </div>
             <div class="process-start flex-row space-between">
                <div class="input-indicator">Welches Ereignis startet den Prozess?</div>
                <input v-model="form.processStart" class="input-start" type="text" placeholder="Anlieferung einer Ware, Feedback eines Kunden"></input>
            </div>
            <div class="process-category flex-row space-between">
                <div class="input-indicator">Kategorie</div>
               <input v-model="form.processCategory" class="input-category" type="text" placeholder="Kategorie"></input>
            </div>
        </div>
        <div class="menu-go-next" @click="finishProcessCreation" v-if="allInputsFilled">
            weiter >
        </div>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: "CreateNewProcess",
    data() {
        return {
            form : {
                id: uuid.v4(),
                processTitle: '',
                processDescription: '',
                processCategory: '',
                processStart: '',
            }
        }
    },
    computed: {
        allInputsFilled() {
            if(this.form.processTitle !== "" && this.form.processDescription !== "" && this.form.processStart !== "" && this.form.processCategory !==""){
                return true;
            } else return false;
        }
    },
    methods: {
        finishProcessCreation() {
            let newProcess = {
                id: this.form.id,
                commonData: {
                    title: this.form.processTitle,
                    description: this.form.processDescription,
                    category: this.form.processCategory,
                },
                startElement: {
                    id: uuid.v4(),
                    name: this.form.processStart
                },
                endElement: {
                    id: uuid.v4(),
                    name: "Ende"
                },
                processPathList: []
            };

            this.$store.dispatch('addProcessAction', {newProcess})
            this.$store.dispatch('setProcessActiveAction', {id: this.form.id})
            this.$emit("finish-process")
        }
    }
}
</script>s

<style lang="scss" scoped>
    textarea,
    input {
        padding-left: 2vw;
    }
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
    .svg-process-image {
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
            font-size: 20px;
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
            font-size: 18px;
        }
    }

    .process-start {
        margin-top: 5vh;
        width: 50vw;

            .input-start {
            border: 1px solid black;
            border-radius: 20px;
            height: 5vh;
            width: 35vw;
            background-color: #F8F8F8;
            font-size: 18px;
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
            font-size: 20px;
        }
    }

    .menu-go-next {
        position: absolute;
        bottom: 4vh;
        right: 4vh;
    }

    .input-indicator {
        width: 10vw;
    }
    
</style>