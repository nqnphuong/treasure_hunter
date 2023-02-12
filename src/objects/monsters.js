import { Container, Sprite, Texture } from "pixi.js";
import { Utils } from "../utils/utils";
import { GAME_HEIGHT, GAME_WIDTH } from "../utils/declare"
export class Monsters extends Container {
    constructor() {
        super();
    }

    createMany() {
        // create monsters
        let numberOfTreasure = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;
        this.monsters = [];
        for (let i = 0; i < numberOfTreasure; i++) {
            const monster = new Sprite(Texture.from("images/blob.png"));
            const x = spacing * i + xOffset;
            const y = Math.floor(Math.random() * (GAME_HEIGHT - monster.height - 0 + 1)) + 0;
            monster.x = x;
            monster.y = y;
            monster.vy = speed * direction;
            direction *= -1;
            this.monsters.push(monster);
            this.addChild(monster);
        }
    }

    updateMonsters() {
        this.monsters.forEach(monster => {
            //Move the blob
            monster.y += monster.vy;

            //Check the blob's screen boundaries
            this.utils = new Utils();
            const blobHitsWall = this.utils.contain(monster, { x: 28, y: 10, width: 488, height: 480 });

            //If the blob hits the top or bottom of the stage, reverse
            //its direction
            if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                monster.vy *= -1;
            }
        });
    }
}