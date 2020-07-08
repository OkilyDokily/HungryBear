import {HungryBear} from "./hungrybear";

export class Game{
  constructor(name, difficulty){
    this.hungryBear = new HungryBear(name, difficulty, this);
    this.intervalId = NaN;
    this.isGameOver = false;
  }

  startGame(){
    this.intervalId = this.hungryBear.setMoodAndHunger();
  }

  gameOver(){
    clearInterval(this.intervalId);
    this.isGameOver = true;
  }

}