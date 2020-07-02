export class HungryBear {

  constructor(name,difficulty) {
    this.difficulties = {"easy": {"time":1500,"feed":15},"medium": {"time":1000,"feed":10},"hard":{"time":500,"feed":5}};
    this.name = name;
    this.foodLevel = 10;
    this.difficulty = difficulty;
    this.level = 1;
    this.happy = true;
  }

  increaseLevel(levelIncrease = 1){
    this.level+= levelIncrease;
    this.difficulties[this.difficulty]["time"] -= this.level * 50;
  }

  setMood() {//should be created halfway between each hunger interval
    setInterval(() => {
      this.happy = false;
    }, this.difficulties[this.difficulty]["time"]);
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, this.difficulties[this.difficulty]["time"]);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 || this.happy === false) {
      return false;
    } else {
      return true;
    }
  }

  pet(){
    this.happy = true;
  }

  feed() {
    this.foodLevel = this.difficulties[this.difficulty]["feed"];
  }
}