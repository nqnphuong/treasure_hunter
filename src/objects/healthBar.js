import { Container, Graphics } from "pixi.js";

export class HealthBar extends Container {
    constructor() {
        super();
    }

    create() {
        this.healthBar = new Container();
        this.healthBar.position.set(512 - 170, 4)
        this.addChild(this.healthBar);

        //Create the black background rectangle
        this.innerBar = new Graphics();
        this.innerBar.beginFill(0x000000);
        this.innerBar.drawRect(0, 0, 128, 8);
        this.innerBar.endFill();
        this.healthBar.addChild(this.innerBar);

        //Create the front red rectangle
        this.outerBar = new Graphics();
        this.outerBar.beginFill(0xFF3300);
        this.outerBar.drawRect(0, 0, 128, 8);
        this.outerBar.endFill();
        this.healthBar.addChild(this.outerBar);

        this.healthBar.outer = this.outerBar;
    }
}