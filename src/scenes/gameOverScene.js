import { Container, TextStyle, Text} from "pixi.js";
import { GAME_HEIGHT } from "../utils/declare"

export class GameOverScene extends Container {
    constructor() {
        super();
        this.gameOverSceneContainer = new Container();
        this.gameOverScene();
    }

    gameOverScene() {
        const style = new TextStyle({
            fontFamily: "Futura",
            fontSize: 64,
            fill: "white"
        });
        this.message = new Text("", style);
        this.message.x = 120;
        this.message.y = GAME_HEIGHT / 2 - 32;
        this.gameOverSceneContainer.addChild(this.message);
    }
}