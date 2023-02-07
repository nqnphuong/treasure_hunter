import { Application, Sprite, Assets, Container } from "pixi.js";
import { PlayScene } from "./scenes/playScene";

export default class Game {
  constructor() {
    this.app = new Application({
      width: 512,
      height: 512,
      antialias: true,
      transparent: false,
      resolution: window.devicePixelRatio || 1,
    });
    this.playSceneContainer = new Container();
    this.app.stage.addChild(this.playSceneContainer);
    document.body.appendChild(this.app.view);
  }

  start() {
    Assets.load('images/treasureHunter.json');
    this.setup();
  }

  setup() {
    //get playScene
    this.playScene = new PlayScene();
    this.playSceneContainer.addChild(this.playScene.playSceneContainer);
  }

  gameLoop(delta) {
    //Runs the current game `state` in a loop and renders the sprites
  }

  play(delta) {
    //All the game logic goes here
  }

  end() {
    //All the code that should run at the end of the game
  }

  update() {
    //Update sreens
  }

}

    // const cat = Sprite.from('images/dungeon.png');
    // cat.x = this.app.screen.width / 2;
    // cat.y = this.app.screen.height / 2;
    // cat.anchor.set(0.5);
    // this.app.stage.addChild(cat);
    // this.app.ticker.add((delta) => {
    //   cat.rotation += 0.1 * delta;
    // });
