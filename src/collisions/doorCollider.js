import Collider, { colliderEvent } from "./colliderNew";
import { Utils } from "../utils/utils";

export class DoorCollder extends Collider{
    constructor(x , y, width, height){
        super('doorCollider', x, y);
        this.width = width;
        this.height = height;
    }

    doorCollision(object){
        const ultis = new Utils();
        let distance = ultis.calcDistance(this.x, this.y, object.x, object.y);
        let widthDistance = object.width / 2 + this.width / 2;
        let heightDistance = object.height / 2 + this.height / 2;
        if (widthDistance < distance) {
            if (this.y <= object.y) {
                return "top";
            } else if (this.y >= object.y) {
                return "bottom";
            }
        } else if (heightDistance < distance) {
            if (this.x <= object.x) {
                return "left";
            } else if (this.x >= object.y) {
                return "right";
            }
        }
    }
}