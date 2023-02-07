import { Container, Sprite, Texture } from "pixi.js";


export class Monsters extends Container {
    constructor() {
        super();
    }

    // createOne() {
    //     let texture = Texture.from("images/blob.png");
    //     this.monster = new Sprite(texture);
    // }

    createMany() {
        let numberOfTreasure = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;
        this.monsters = [];
        for (let i = 0; i < numberOfTreasure; i++) {
            const monster = new Sprite(Texture.from("images/blob.png"));
            const x = spacing * i + xOffset;
            const y = Math.floor(Math.random() * (512 - monster.height - 0 + 1)) + 0;
            monster.x = x;
            monster.y = y;
            monster.vy = speed * direction;
            direction *= -1;
            this.monsters.push(monster);
            this.addChild(monster);
        }
    }

}