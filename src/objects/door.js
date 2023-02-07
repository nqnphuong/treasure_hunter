import { Container, Sprite, Texture } from "pixi.js";

export class Door extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/door.png");
        this.door = new Sprite(texture);
        this.door.position.set(32, 0);
        this.addChild(this.door);
    }
}