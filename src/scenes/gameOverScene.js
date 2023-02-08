import { Container, TextStyle} from "pixi.js";

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
        this.message = new Text("The End!", style);
        this.message.x = 120;
        this.message.y = 512 / 2 - 32;
    }
}