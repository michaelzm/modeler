<template>
  <div class="outer-square">
    <div class="function-title" v-text="this.data.title">Process Creator</div>
    <div class="function-icon">Icon</div>
    <div
      class="description" v-text="this.data.description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ad nostrum soluta eum, vitae dolorum blanditiis 
      quas deserunt, quidem, repellat animi distinctio? Deserunt sit hic facilis, sapiente mollitia vel tempore.
    </div>
  </div>
</template>

<script>
export default {
  name: "FunctionOverviewComponent",
  props: ['data']
  
};
</script>

<style lang="scss" scoped>
.outer-square {
  height: 60vh;
  width: 20vw;
  border: 1px solid black;
  border-radius: 18px;
}

.function-title {
  margin-top: 5vh;
  font-size: 10px;
  text-align: center;
}

.function-icon {
    margin-top: 5vh;
    text-align: center;
}
.description {
    font-size: 11px;
    margin-top: 5vh;
}
</style>
