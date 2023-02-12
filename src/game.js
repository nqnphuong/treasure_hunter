import { Application, Sprite, Assets, Container } from "pixi.js";
import { PlayScene } from "./scenes/playScene";
import { GameOverScene } from "./scenes/gameOverScene";
import { Collider } from "./collisions/collider";
import { GAME_HEIGHT, GAME_WIDTH } from "./utils/declare"
export default class Game {
  constructor() {
    this.app = new Application({
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      antialias: true,
      transparent: false,
      resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
  }

  start() {
    Assets.load('images/treasureHunter.json');
    this.setup();
  }

  setup() {
    //get playScene
    this.playScene = new PlayScene();
    this.app.stage.addChild(this.playScene.playSceneContainer);

    //get gameOverScene
    this.gameOverScene = new GameOverScene();
    this.app.stage.addChild(this.gameOverScene.gameOverSceneContainer);
    this.gameOverScene.visible = false;

    //get keyController
    //I get the hunterController in object/hunter.js

    // Set the game state
    this.state = this.play;
    //Start the game loop 
    this.app.ticker.add((delta) => this.gameLoop(delta));
  }

  gameLoop(delta) {
    //Runs the current game `state` in a loop and renders the sprites
    this.state(delta);
  }

  play(delta) {
    //All the game logic goes here

    //hunter move
    this.playScene.hunter.updateHunterMove();

    //Contain the explorer inside the area of the dungeon
    this.playScene.hunter.hunterInsideMap();

    //Move the monsters, ...
    this.playScene.monsters.updateMonsters();

    //Collision
    let hunterHit = false;
    this.collider = new Collider();
    this.playScene.monsters.monsters.forEach(monster => {
      if (this.collider.hitTestRectangle(this.playScene.hunter.hunter, monster)) {
        hunterHit = true;
      }
    });
    if (hunterHit) {
      this.playScene.hunter.alpha = 0.5;
      this.playScene.healthBar.healthBar.outer.width -= 1;
    } else {
      this.playScene.hunter.alpha = 1;
    }

    if (this.collider.hitTestRectangle(this.playScene.hunter.hunter, this.playScene.treasure.treasure)) {
      this.playScene.treasure.treasure.x = this.playScene.hunter.hunter.x + 8;
      this.playScene.treasure.treasure.y = this.playScene.hunter.hunter.y + 8;
      // Win
      if (this.collider.hitTestRectangle(this.playScene.hunter.hunter, this.playScene.door.door)) {
        this.state = this.end;
        this.gameOverScene.message.text = "You won!";
      }
    }

    //Lost
    if (this.playScene.healthBar.healthBar.outer.width < 0) {
      console.log("end");
      this.state = this.end;
      this.gameOverScene.message.text = "You lost!";
    }


  }

  end() {
    //All the code that should run at the end of the game
    console.log("here end");
    this.playScene.visible = false;
    this.gameOverScene.visible = true;
  }
}