import { utils } from 'pixi.js';

export const colliderEvent = Object.freeze({
    Colliding: "collider:colliding"
})

export default class Collide extends utils.EventEmitter{
    constructor(type, x, y){
        super();
        this.type = type;
        this.x = x;
        this.y = y;
    }

    checkCollision(objectToCheck){
        throw new Error("Must override checkCliision");
    }
}