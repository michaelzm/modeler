<template>
  <div class="process-start-block flex-column center-hor">
    <div class="start-title">{{getActiveProcessStartElement}}</div>
    <div class="start-circle"></div>
    <!--  <div class="connection-arrow">
            <div class="svg-connecting-arrow"></div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "ProcessStart",
  computed: {
    getActiveProcessStartElement() {
      let processList = this.$store.state.processStore.processList;
      let activeid = this.$store.state.overview.activeProcessId;
      let start;

      processList.forEach(process => {
        if (process.id === activeid) {
          start = process.startElement;
        }
      });
      return start.name;
    }
  }
};
</script>

<style lang="scss">
.start-circle {
  height: 4vh;
  width: 4vh;
  border: 7px solid red;
  border-radius: 100%;
}

.start-title {
  text-align: center;
  width: 100%;
}

.connection-arrow {
  height: 4vh;
  width: 4vh;
}

.svg-connecting-arrow {
  background-image: url(../assets/connecting-arrow.svg);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}
</style>