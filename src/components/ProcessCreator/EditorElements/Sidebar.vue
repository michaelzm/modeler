<template>
    <div class="sidebar-informations noselect">
        <div class="informations-type">
            TYP
        </div>
        <div class="data-field">Lorem ipsum</div>
        <div class="data-field">Lorem ipsum</div>
        <div class="data-field">Lorem ipsum</div>
        <div class="data-field">Lorem ipsum</div>
        <div class="data-field">Lorem ipsum</div>
        <div class="data-field">Lorem ipsum</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .informations-type{
        font-size: 20px;
        text-align: center;
    }
    .data-field {
        padding-left: 1vw;
        padding-right: 1vw;
        margin-top: 5vh;
    }

    .sidebar-informations {
    box-shadow: 20px 20px 40px 0px rgba(0,0,0,0.5);
    height: 100vh;
    z-index: 200;
    width: 20vw;
    position: fixed;
    right: 0px;
    bottom: 0px;
    background-color: white;
    }
</style>