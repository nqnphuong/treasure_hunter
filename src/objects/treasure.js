import { Container, Sprite, Texture } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../utils/declare"

export class Treasure extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/treasure.png");
        this.treasure = new Sprite(texture);
        this.treasure.x = GAME_WIDTH - this.treasure.width - 60;
        this.treasure.y = GAME_HEIGHT / 2 - this.treasure.height / 2;
        this.addChild(this.treasure);
    }
}