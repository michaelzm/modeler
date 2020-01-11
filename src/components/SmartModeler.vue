<template>
    <div class="smart-modeler-overview">
        <h3>Smart Modeler</h3>
        <div class="functions flex-row space-even">
            <FunctionOverviewComponent v-bind:data="{title: 'Process Creator', description: 'Modellieren Sie Ihre Prozesse mit einem einfachen Assistenten und vermeiden Sie so fehlerhafte Modelle der herkömmlichen Modellierung.'}"/>
            <FunctionOverviewComponent v-bind:data="{title: 'Process Editor', description: 'Tragen Sie Änderungen bei bestehenden Prozessmodellen nach oder ergänzen Sie fehlende Informationen. Smart Process gibt Ihnen hierzu Meldungen, an welchen Stellen Informationen besonders wichtig sind.'}"/>
            <FunctionOverviewComponent v-bind:data="{title: 'Business Explorer', description: 'Sehen Sie Ihre bestehenden Prozessmodelle ein. Schalten Sie dabei die optionale BPMN-Sicht hinzu. Verknüpfen Sie zudem Ihre Prozesse miteinander und bringen diese so in eine ganzheitliche Sicht.'}"/>
        </div>
    </div>
</template>

<script>
import FunctionOverviewComponent from './FuntionOverviewComponent.vue'
export default {
    name: 'SmartModeler',
    components: {
        FunctionOverviewComponent
    }
};

</script>


<style lang="scss">
    h3 {
        text-align: center;
    }

    .functions {
        margin-top: 10vh;
    }
</style>