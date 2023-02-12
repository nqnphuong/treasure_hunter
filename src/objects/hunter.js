import { Container, Sprite, Texture } from "pixi.js";
import { Keyboard } from "../inputs/keyboard";
import { Utils } from "../utils/utils";
import { GAME_HEIGHT, GAME_WIDTH } from "../utils/declare"

export class Hunter extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/explorer.png");
        this.hunter = new Sprite(texture);
        this.hunter.x = 68;
        this.hunter.y = GAME_HEIGHT / 2 - this.hunter.height / 2;
        this.hunter.vx = 0;
        this.hunter.vy = 0;
        this.addChild(this.hunter);
    }

    hunterController() {
        console.log("Hey " + this.hunter.vx + " " + this.hunter.vy)
        let keyboard = new Keyboard();
        let left = keyboard.keyboard(37),
            up = keyboard.keyboard(38),
            right = keyboard.keyboard(39),
            down = keyboard.keyboard(40);

        left.press = () => {
            this.hunter.vx = -5;
            this.hunter.vy = 0;
            console.log("Left: " + this.hunter.vx + " " + this.hunter.vy)
        }

        left.release = () => {
            if (!right.isDown && this.hunter.vy === 0) {
                this.hunter.vx = 0;
            }
        }

        up.press = () => {
            this.hunter.vy = -5;
            this.hunter.vx = 0;
            console.log("Up: " + this.hunter.vx + " " + this.hunter.vy)
        }

        up.release = () => {
            if (!down.isDown && this.hunter.vx === 0) {
                this.hunter.vy = 0;
            }
        }

        right.press = () => {
            this.hunter.vx = 5;
            this.hunter.vy = 0;
            console.log("Right: " + this.hunter.vx + " " + this.hunter.vy)
        }

        right.release = () => {
            if (!left.isDown && this.hunter.vy === 0) {
                this.hunter.vx = 0;
            }
        }

        down.press = () => {
            this.hunter.vy = 5;
            this.hunter.vx = 0;
            console.log("Down: " + this.hunter.vx + " " + this.hunter.vy)
        }

        down.release = () => {
            if (!up.isDown && this.hunter.vx === 0) {
                this.hunter.vy = 0;
            }
        }
    }

    updateHunterMove() {
        this.hunter.x += this.hunter.vx;
        this.hunter.y += this.hunter.vy;
    }

    hunterInsideMap() {
        this.utils = new Utils();
        this.utils.contain(this.hunter, { x: 28, y: 10, width: 488, height: 480 });
    }

}