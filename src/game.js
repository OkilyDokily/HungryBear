export class Game{
  constructor(){
    this.level = 1;
    this.difficulty = "easy";
  }

  increaseLevel(){
    this.level++;
  }
}