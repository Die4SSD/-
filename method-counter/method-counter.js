let getCounter = {
    step: 5,
    log() {
      this.step=Math.log(this.step);
      return this;
    },
    count(arg) {
      this.step=this.step+arg;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    },
    reset(){
      this.step=0
      return this
    }
}
getCounter.count(4).log().count(3).log().reset().count(8).showStep();