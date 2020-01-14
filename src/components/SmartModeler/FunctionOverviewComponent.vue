<template>
  <div class="function-card" @click="goToFunction" v-bind:class="{checkered: isProcessCreateFunction}">
    <div class="function-title" v-text="this.data.title">Process Creator</div>
    <div class="function-icon" v-bind:class="{pyramide: isBusinessExploreFunction, editIcon: isProcessEditFunction}"></div>
    <div class="function-description" v-text="this.data.description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ad nostrum soluta eum, vitae dolorum blanditiis 
      quas deserunt, quidem, repellat animi distinctio? Deserunt sit hic facilis, sapiente mollitia vel tempore.
    </div>
  </div>
</template>

<script>
export default {
  name: "FunctionOverviewComponent",
  props: ['data'],
  methods: {
      goToFunction() {
          this.$emit("open-function", this.data.id);
      },
  },
  computed: {
      isProcessCreateFunction() {
        if(this.data.id === "process_creat"){
          return true;
        } else return false;
      },
      isBusinessExploreFunction() {
        if(this.data.id === "business_expl"){
          return true;
        } else return false;
      },
      isProcessEditFunction() {
        if(this.data.id === "process_edit"){
          return true;
        } else return false;
      }
  }
}
</script>

<style lang="scss" scoped>
.editIcon {
    background-image: url(./assets/edit_icon_svg.svg);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
}
.pyramide {
    background-image: url(./assets/pyramide.svg);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
}

.function-card {
  height: 60vh;
  width: 30vw;
  max-width: 400px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 18px;
}

.function-title {
  margin-top: 5vh;
  font-size: 10px;
  text-align: center;
  font-size: 28px;
}

.function-icon {
    margin-top: 5vh;
    text-align: center;
    height: 10vh;
}
.function-description {
    height:max-content;
    font-size: 16px;
    margin-top: 5vh;
    padding-left: 2vw;
    padding-right: 2vw;
}

.function-card:hover{
     box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
     -moz-transform: translate(-2px, -2px);
    -ms-transform: translate(-2px, -2px);
    -o-transform: translate(-2px, -2px);
    -webkit-transform: translate(-2px, -2px);
    transform: translate(0, -5px);
    transition: transform 0.3s;
}
</style>
