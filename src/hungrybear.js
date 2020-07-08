

export class HungryBear {
  //game object is injected rather than imported
  constructor(name,difficulty,gameObject) {
    this.game = gameObject;
    this.difficulties = {"easy": {"time":1500,"feed":15},"medium": {"time":1000,"feed":10},"hard":{"time":500,"feed":5}};
    this.name = name;
    this.foodLevel = 10;
    this.difficulty = difficulty;
    this.level = 1;
    this.levelLoop = 0;
    this.hasBeenPetted = false;
    this.moodLevel = 0;
    
  }

  increaseLevel(levelIncrease = 1){
    this.level+= levelIncrease;
    this.difficulties[this.difficulty]["time"] -= this.level * 50;
    clearInterval(this.game.intervalId);
    this.game.intervalId = this.setMoodAndHunger(); 
  }

  //a lot of logic gets stuffed here: because async
  setMoodAndHunger() {
    return setInterval(() => {
      this.foodLevel--;
      this.moodLevel++;
      this.levelLoop++;
      if(this.didYouGetEaten()){
        this.game.gameOver();
      }
      else
      if(this.levelLoop === 10){
        this.levelLoop = 0;
        this.increaseLevel();
      }  
    }, this.difficulties[this.difficulty]["time"]);
  }

  didYouGetEaten() {
    if ((this.foodLevel <= 0) || (this.moodLevel === 5 && this.hasBeenPetted === false)) {
      return true;
    } else {
      if(this.moodLevel === 5){
        this.moodLevel = 0;
      }
      return false;
    }
  }

  pet(){
    this.hasBeenPetted = true;
  }

  feed() {
    this.foodLevel = this.difficulties[this.difficulty]["feed"];
  }
}