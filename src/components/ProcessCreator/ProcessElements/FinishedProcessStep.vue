<template>
  <div class="finished-process-step flex-row">

    <!-- left side informations -->
    <div class="input-informations flex-column " v-if="this.isStepSelected || this.isStepMarked">
        <div class="input-data-container flex-row"  @click="toggleInputDataActive" >
            <div class="input-data noselect" >Benötigte Dokumente</div>
            <div class="circle circle-right" v-bind:class="{inputDataSelected: isInputDataSelected}"></div>
        </div>

      <div class="input-it-container flex-row" @click="toggleInputItActive" >
        <div class="input-it noselect">Verwendete Software / IT</div>
        <div class="circle circle-right" v-bind:class="{inputItSelected: isInputItSelected}"></div>
      </div>
    </div>

    <!-- process step and next step -->
    <div class="center-informations flex-column center-hor">
      <div
        class="process-step noselect center-text-ver-hor"
        v-bind:class="{ selected: isStepSelected, marked: isStepMarked}"
        @click="toggleProcessStepActive"
      >
      <div class="process-step-name">
      Ware trifft ein
      </div>
        <div class="delete-icon">
          <div class="svg-delete-process-step" v-if="this.isStepSelected" />
        </div>
      </div>
      <div class="next-process-step-container flex-row" @click="toggleNextStep" v-if="this.isStepSelected || this.isStepMarked">
        <div class="next-process-step noselect">Nächster Schritt</div>
        <div class="circle circle-right"></div>
      </div>
    </div>
    <!-- right side informations -->
    <div class="output-informations noselect flex-row"  v-if="this.isStepSelected || this.isStepMarked" @click="toggleOutputDataActive">
        <div class="circle circle-left" v-bind:class="{outputDataSelected: isOutputDataSelected}"></div>
      <div class="output-data">Entstehende Daten</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinishedProcessStep",
  data() {
    return {
      isStepSelected: false,
      isStepMarked: false,
      isInputDataSelected: false,
      isInputItSelected: false,
      isOutputDataSelected: false,
      isNextStepActive: false,
    };
  },
  methods: {
    toggleProcessStepActive() {
      //mark selected
      if (!this.isStepSelected && !this.isStepMarked) {
        //first click toggle red delte
        this.isStepSelected = true;
      } 
      else if (this.isStepMarked){
          this.isStepMarked = false;
          this.isStepSelected = true;
      }else {
        //second click toggles further infos
        this.isStepSelected = false;
        this.isStepMarked = true;
      }
    },
    unselectAll() {
      this.isStepMarked = false;
      this.isInputDataSelected = false;
      this.isInputItSelected = false;
      this.isOutputDataSelected = false;
      this.isNextStepActive = false;
    },
    toggleInputDataActive() {
        this.isInputDataSelected = !this.isInputDataSelected;
        if(this.isInputDataSelected){
            this.$emit("open-navbar", "input-data")
        }
    },
    toggleOutputDataActive() {
        this.isOutputDataSelected = !this.isOutputDataSelected;
        if(this.isOutputDataSelected){
            this.$emit("open-navbar", "output-data")
        }

    },
    toggleInputItActive() {
        this.isInputItSelected = !this.isInputItSelected;
        if(this.isInputItSelected){
            this.$emit("open-navbar", "input-it")
        }
    },
    openInformationBar () {
        this.$emit("display-informations")
    },
    toggleNextStep () {
        this.isStepMarked = false;
        this.isStepSelected = false;
        this.isNextStepActive = !this.isNextStepActive;
    }
  }
};
</script>
<style lang="scss">

.finished-process-step {
    width: fit-content;
    margin-top: 5vh;
}

.input-informations {
    margin-right: 3vh;
    width: 30vw;
}

.output-informations {
    margin-left: 3vh;
    width: 30vw;
    height: fit-content;
}

.center-informations{
}

.process-step {
    width: 20vw;
    height: 20vh;
    border: 3px solid black;
    border-radius: 15px;
    max-height: 100px;
    max-width: 250px;
}

.circle {
    height: 4vh;
    width: 4vh;
    border-radius: 100%;
    border: 1px solid black;
}

.circle-right {
    margin-left: 2vh;
}

.circle-left {
    margin-right: 2vh;
}


.selected {
  border-color: red;
  color: red;
  transition: border-color 0.5s;
}

.inputDataSelected {
    background-color: red;
    transition: background-color 0.5s;
}

.inputItSelected {
    background-color: yellow; 
    transition: background-color 0.5s;
}

.outputDataSelected {
    background-color: #00FF14;
    transition: background-color 0.5s;
}

.marked {
    background-color: #5db4ff !important;
    transition: background-color 0.5s;
}

.delete-icon {
    width: 3vh;
    height: 3vh;
    position: relative;
    top: -50px;
    left: -15px;
}

.next-process-step-container {
    margin-top: 3vh;
    width: fit-content;
}

.next-process-step {
    max-height: 50px;
    max-width: 250px;
    width: auto;
}

.svg-delete-process-step {
    background-image: url(../assets/delete-process-step.svg);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
}

.input-data-container {
    width: auto;
    place-self: flex-end;
}

.input-it-container {
    width: auto;
    place-self: flex-end;
}
.input-data {
    max-height: 50px;
    max-width: 250px;
    width: auto;
    height: 10vh;
}

.input-it {

    max-height: 50px;
    max-width: 250px;   
    width: auto;
    height: 10vh;
}

.output-data {
    max-height: 50px;
    max-width: 250px;
    width: auto;
    height: 10vh;
}

</style>