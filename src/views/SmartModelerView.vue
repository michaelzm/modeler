<template>
    <div class="smart-modeler-overview noselect" v-bind:class="{hover: hover}">
        <h1>Smart Modeler - Funktionsüberblick</h1>
        <div class="functions flex-row space-even" >
            <FunctionOverviewComponent @hover-active="hover = true" @hover-inactive="hover = false" @open-function="openFunction" v-bind:data="{id: 'process_creat', title: 'Process Creator', description: 'Modellieren Sie Ihre Prozesse mit einem einfachen Assistenten und vermeiden Sie so fehlerhafte Modelle der herkömmlichen Modellierung.'}"/>
            <FunctionOverviewComponent @hover-active="hover = true" @hover-inactive="hover = false" @open-function="openFunction" v-bind:data="{id: 'process_edit', title: 'Process Editor', description: 'Tragen Sie Änderungen bei bestehenden Prozessmodellen nach oder ergänzen Sie fehlende Informationen. Smart Process gibt Ihnen hierzu Meldungen, an welchen Stellen Informationen besonders wichtig sind.'}"/>
            <FunctionOverviewComponent @hover-active="hover = true" @hover-inactive="hover = false" @open-function="openFunction" v-bind:data="{id: 'business_expl', title: 'Business Explorer', description: 'Sehen Sie Ihre bestehenden Prozessmodelle ein. Schalten Sie dabei die optionale BPMN-Sicht hinzu. Verknüpfen Sie zudem Ihre Prozesse miteinander und bringen diese so in eine ganzheitliche Sicht.'}"/>
        </div>
    </div>
</template>

<script>
import FunctionOverviewComponent from '@/components/SmartModeler/FunctionOverviewComponent.vue'
export default {
    name: 'SmartModeler',
    data() {
         return {
             hover: false,
         }  
    },
    components: {
        FunctionOverviewComponent
    },
    methods: {
        openFunction(function_id){
            switch(function_id){
                case "process_creat":
                    console.log("opening")
                    this.$router.push({name: 'processcreator'})
                    break;
                case "process_edit":

                    break;
                case "business_expl":
                    
                    break;

                default:
                    break;
            }
        },
    },
    
};

</script>


<style lang="scss">
    .hover{
        background-color: rgba(241, 241, 241, 0.705) !important;
        transition: background-color 2.5s;
    }

    h1 {
        padding-top: 5vh;
        text-align: center;
    }

    .functions {
        margin-top: 10vh;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    .smart-modeler-overview{
        height: 100vh;
        width: 100vw;
        z-index: 100;
        background-color: white;
        transition: background-color 1.25s;
    }
</style>