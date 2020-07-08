
# _Hungry Bear_

#### _This demonstrates knowledge of JavaScript and Jest._

#### By _**Matthew**_


## Description

_A page demonstrates basic ES6 and Jest knowledge_
_Page gives user info about their age on different planets including life expectancy_

| spec- game logic                                                                     | input                             | output                                                           |
|--------------------------------------------------------------------------------------|-----------------------------------|------------------------------------------------------------------|
| create game object                                                                   | new Game()                        | Game{}                                                           |
| start game                                                                           | game.startGame()                  | run game and collect the interval Id                             |
| run game                                                                             |                                   |                                                                  |
| create hungry Bear                                                                   | new HungryBear()                  | HungryBear{}                                                     |
| begin hunger and mood routine                                                        | hungryBear.setMoodAndHunger()     | begin mood and hunger interval Game{intervalId = 3425345}        |
| must pet every 5 loops                                                               | factor petting into main interval | interval runs until isEaten and then calls the game.GameOver();  |
| Let the Game come to an End                                                          |                                   |                                                                  |
| game.gameOver() is called from HungryBear on level before time would go down to zero | hungryBear.increaseLevel()        | game.gameWon = true;                                             |
|                                                                                      |                                   |                                                                  |
## Setup/Installation Requirements

Install node and npm. Clone/download the repo and type 'npm install' inside of a terminal windows in the same directory is the the cloned repo.

## Known Bugs

_I don't think there are any bugs but please tell me if you see any._

## Support and contact details

_Open a Github issue if you see a problem or have questions_

## Technologies Used

_This is an html, css, Bootstrap, jQuery, Jest, Webpack, and ES6 thing._

### License

*Feel free to use this code as you please*

Copyright (c) 2020 **_Matthew_**
