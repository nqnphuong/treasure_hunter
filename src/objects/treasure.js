import { Container, Sprite, Texture } from "pixi.js";


export class Treasure extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/treasure.png");
        this.treasure = new Sprite(texture);
        this.treasure.x = 512 - this.treasure.width - 60;
        this.treasure.y = 512 / 2 - this.treasure.height / 2;
        this.addChild(this.treasure);
    }
}