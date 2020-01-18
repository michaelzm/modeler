<template>
    <div class="new-process-wrapper checkered flex-column center-ver center-hor">
        <div class="create-new-process">
            <div class="top-part flex-column center-hor">
                <h3>Neuen Prozess anlegen</h3>
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
                <input v-on:keyup.enter="finishProcessCreation" v-model="form.processCategory" class="input-category" type="text" placeholder="Kategorie"></input>
                </div>
            </div>
        </div>
        <div class="menu-go-next" @click="finishProcessCreation" v-if="allInputsFilled">
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
            },
            //we need to reuse startElementId
            startElementId: uuid.v4(),
            
            //in order to link path id to process we need it globally
            pathId: uuid.v4(),
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
            this.createNewProcess();
            this.createNewProcessPath();

            //set process Active
            this.$store.dispatch('setProcessActiveAction', {id: this.form.id})

            this.$emit("finish-process")
        },
        createNewProcess() {
            let newProcess = {
                id: this.form.id,
                commonData: {
                    title: this.form.processTitle,
                    description: this.form.processDescription,
                    category: this.form.processCategory,
                },
                startElement: {
                    id: this.startElementId,
                    name: this.form.processStart
                },
                endElement: {
                    id: null,
                    name: null,
                },
                processPathList: [this.pathId]
            };

            this.$store.dispatch('addProcessAction', {newProcess})
        },
        createNewProcessPath() {
            let processPath = {
                id: this.pathId,
                pathStartElement: {
                    id: this.startElementId,
                    name: this.form.processStart 
                },
                pathEndElement: {
                    id: null,
                    name: null
                },
                pathElements: [{ 
                    prevPathElementId: '0',
                    currentPathElementId: '1',
                    currentProcessElement: {
                    type: "Activity",
                    id: '1',
                    },
                    nextPathElementId: '2'
                },
                { 
                    prevPathElementId: '1',
                    currentPathElementId: '2',
                    currentProcessElement: {
                    type: "Activity",
                    id: '2',
                    },
                    nextPathElementId: 'null'
                }]
            }

            this.$store.dispatch("addProcessPathAction", {processPath})
        }
    }
}
</script>s

<style lang="scss" scoped>
    textarea,
    input {
        padding-left: 2vw;
        border-radius: 9px;
    }
    h3 {
        margin-top: 2vh;
    }
    .new-process-wrapper {
        height: 100%;
        min-height: 100vh;
    }

    .create-new-process {
        background-color: white;
        border-radius: 15px;
        width: 80%;
        margin-bottom: 3vh;
        height: 90%;
        min-height: 90vh;
        box-shadow: 0 5px 10px rgba(154,160,185,.1), 0 15px 40px rgba(166,173,201,.2);
    }

    .divider {
        width: 100%;
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
            border: 1px solid rgb(218, 218, 218);

            height: 5vh;
            width: 35vw;
            font-size: 20px;
        }
    }

    .process-description {
        margin-top: 5vh;
        width: 50vw;

            .input-description {
            border: 1px solid rgb(218, 218, 218);
            height: 20vh;
            width: 35vw;
            font-size: 18px;
        }
    }

    .process-start {
        margin-top: 5vh;
        width: 50vw;

            .input-start {
            border: 1px solid rgb(218, 218, 218);
            height: 5vh;
            width: 35vw;
            font-size: 18px;
        }
    }

    .process-category {
        margin-top: 5vh;
        width: 50vw;


        .input-category {
            border: 1px solid rgb(218, 218, 218);
            height: 5vh;
            width: 35vw;
            font-size: 20px;
        }
    }

    .menu-go-next {
        position: absolute;
        bottom: 3vh;
        right: 2vh;
        width: 6vh;
        height: 6vh;
        background-color: rgba(30, 238, 65, 0.658);
        border-radius: 100%;
        box-shadow: 0 5px 10px rgba(154,160,185,.1), 0 15px 40px rgba(166,173,201,.2);
    }

    .input-indicator {
        width: 10vw;
    }
    
</style>