import { Container, Sprite, Texture } from "pixi.js";


export class Hunter extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/explorer.png");
        this.hunter = new Sprite(texture);
        this.hunter.x = 68;
        this.hunter.y = 512 / 2 - this.hunter.height / 2;
        this.hunter.vx = 0;
        this.hunter.vy = 0;
        this.addChild(this.hunter);
    }
}