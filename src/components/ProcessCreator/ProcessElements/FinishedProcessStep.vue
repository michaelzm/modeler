<template>
  <div class="finished-process-step flex-row">

    <!-- left side informations -->
    <transition name="fade">
        <div class="input-informations flex-column " v-if="this.isActivityClicked">
            <div class="input-data-container flex-row center-hor"  @click="markActive('input-data')" >
                <div class="input-data noselect bold">Benötigte Dokumente</div>
                <div class="circle circle-right" v-bind:class="{inputDataSelected: isInputDataSelected}"></div>
                <div class="connecting-to-center-line-hor" v-bind:class="{inputDataMarkLine: isInputDataSelected}"></div>
            </div>
            <div class="input-it-container flex-row center-hor" @click="markActive('input-it')" >
                <div class="input-it noselect bold">Verwendete Software / IT</div>
                <div class="circle circle-right" v-bind:class="{inputItSelected: isInputItSelected}"></div>
                <div class="connecting-to-center-line-hor" v-bind:class="{inputItMarkLine: isInputItSelected}"></div>
            </div>
        </div>
    </transition>

    <!-- process step and next step -->
    <div class="center-informations flex-column center-hor">
      <div
        class="process-step noselect flex-column"
        v-bind:class="{ selected: isActivityActive, marked: isActivitySelected}"
        @click="markActive('activity')"
      >
        <div class="delete-icon" v-if="this.isActivityActive" @click="deleteActivity" >
          <div class="svg-delete-process-step"/>
        </div>
        <div class="process-step-name bold" v-text="activity.name">
          Placeholder
        </div>
      </div>
      <div class="next-process-step-container flex-row" @click="toggleNextStep" v-if="this.isActivityClicked">
        <div class="next-process-step noselect bold">Nächster Schritt</div>
        <div class="circle-connected flex-column center-hor">
            <div class="connecting-to-center-line-ver"></div>
            <div class="circle circle-right"></div>
        </div>
      </div>
    </div>
    
    <!-- right side informations -->
    <transition name="fade">
        <div class="output-informations noselect flex-row center-hor"  v-if="this.isActivityClicked" @click="markActive('output-data')">
            <div class="connecting-to-center-line-hor" v-bind:class="{outputDataMarkLine: isOutputDataSelected}"></div>
            <div class="circle circle-left" v-bind:class="{outputDataSelected: isOutputDataSelected}"></div>
            <div class="output-data bold">Entstehende Daten</div>
        </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "FinishedProcessStep",
  data() {
    return {
        //show input output
        isActivityClicked: false,
        
        //show red border and delete icon
        isActivityActive: false,

        //make elements colored
        isActivitySelected: false,
        isInputDataSelected: false,
        isInputItSelected: false,
        isOutputDataSelected: false,
        isNextStepActive: false,
    };
  },
  props: ["activity"],
  methods: {
    unselectAll() {
      this.isActivitySelected = false;
      this.isInputDataSelected = false;
      this.isInputItSelected = false;
      this.isOutputDataSelected = false;
    },
    toggleNextStep () {
        this.isActivitySelected = false;
        this.isActivityClicked = false;
        this.isNextStepActive = !this.isNextStepActive;
        this.$emit("show-nextstep");
    },
    markActive(type){
        //first check if red border exists and if so, remove it
        if(type !== "activity" && this.isActivityActive){
            this.isActivityActive = false;
        }

        //next disable the prev selected element
        this.unselectAll();
        switch(type){
            case "input-it":
                this.isInputItSelected = true;
                this.$emit("open-navbar", "input-it")
                break;
            case "input-data":
                this.isInputDataSelected = true;
                this.$emit("open-navbar", "input-data")
                break;
            case "output-data":
                this.$emit("open-navbar", "output-data")
                this.isOutputDataSelected = true;
                break;
            case "activity":
                if(!this.isActivityClicked){
                    //first clicked,  show informations
                    this.isActivityClicked = true;
                    
                    //also mark activity red
                    this.isActivityActive = true;
                } else if(this.isActivityActive){
                    //if red border active and we click, we should remove red border and mark activity
                    this.isActivityActive = false;
                    this.isActivitySelected = true;
                    this.$emit("open-navbar", "activity")
                }
                else {
                    this.isActivityActive = true;
                }

                break;
            default:
                console.warn("no such type defined");
                break;
        }
    },
    deleteActivity(){
        this.$emit("delete", this.activity.id)
    }
  }
};
</script>
<style lang="scss" scoped>

.finished-process-step {
    width: fit-content;
    margin-top: 5vh;
}

.input-informations {
/*     margin-right: 3vh; */
    width: 30vw;
}

.output-informations {
   /*  margin-left: 3vh; */
    width: 30vw;
    height: fit-content;
}

.connecting-to-center-line-hor {
    width: 3vh;
    height: 1px;
    border-top: 2px dashed black;
}

.connecting-to-center-line-ver {
    width: 1px;
    height: 3vh;
    border-left: 2px dashed black;
}

.cirlce-connected {
    height: 6vh;
}

.center-informations{
}

.process-step {
    width: 20vw;
    height: 20vh;
    border: 3px solid black;
    background-color: white;
    border-radius: 15px;
    max-height: 100px;
    max-width: 250px;
}

.process-step-name {
    align-self: center;
    justify-self: flex-end;
}

.delete-icon {
    width: 3vh;
    height: 3vh;
    position: relative;
    top: -1vh;
    left: -1vh;
}

.circle {
    height: 4vh;
    width: 4vh;
    border-radius: 100%;
    border: 1px solid black;
    background-color: white;
}

.circle-right {

}

.circle-left {

}


.selected {
  border-color: red;
  color: red;
  transition: border-color 0.5s;
   box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(245, 111, 111, 0.2);
}

.inputDataMarkLine {
    border-color: red;
}

.inputDataSelected {
    background-color: red;
    transition: background-color 0.5s;
     box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(255, 22, 22, 0.2);
}

.inputItMarkLine {
    border-color: pink;
}

.inputItSelected {
    background-color: pink;
    transition: background-color 0.5s;
     box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(253, 188, 245, 0.2);
}

.outputDataMarkLine {
    border-color: #00FF14;
}

.outputDataSelected {
    background-color: #00FF14;
    transition: background-color 0.5s;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(53, 255, 27, 0.2);
}

.marked {
    background-color: #5db4ff !important;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(33, 85, 255, 0.2);
    transition: background-color 0.5s;
}



.next-process-step-container {
    width: fit-content;
}

.next-process-step {
    max-height: 50px;
    max-width: 250px;
    place-self: flex-end;
    width: auto;
    margin-right: 1vw;
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
    margin-right: 1vw;
    width: auto;
    height: 10vh;
}

.input-it {
    margin-right: 1vw;
    max-height: 50px;
    max-width: 250px;   
    width: auto;
    height: 10vh;
}

.output-data {
    margin-left: 1vw;
    max-height: 50px;
    max-width: 250px;
    width: auto;
    height: 10vh;
}

</style>