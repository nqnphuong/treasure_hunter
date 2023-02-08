import { Container, Sprite } from "pixi.js";
import { Door } from "../objects/door";
import { Treasure } from "../objects/treasure";
import { Hunter } from "../objects/hunter";
import { Monsters } from "../objects/monsters";
import { HealthBar } from "../objects/healthBar";


export class PlayScene extends Container{
    constructor(){
        super();
        this.playSceneContainer = new Container();
        this.playScene();
        this.createDoor();     
        this.createTreasure(); 
        this.createHunter();
        this.createMonsters();
        this.createHealthBar();
    }

    playScene(){
        this.dungeon = Sprite.from('images/dungeon.png');
        this.playSceneContainer.addChild(this.dungeon);
    }

    createDoor(){
        this.door = new Door();
        this.door.create();
        this.playSceneContainer.addChild(this.door);
        console.log(this.door.x + " " + this.door.y); // check position
    }

    createTreasure(){
        this.treasure = new Treasure();
        this.treasure.create();
        this.playSceneContainer.addChild(this.treasure);
        console.log(this.treasure.x + " " + this.treasure.y); // check position
    }

    createHunter(){
        this.hunter = new Hunter();
        this.hunter.create();
        this.playSceneContainer.addChild(this.hunter);
        console.log(this.hunter.x + " " + this.hunter.y); // check position
    
        this.hunter.hunterController();
    }

    createMonsters(){
        this.monsters = new Monsters();
        this.monsters.createMany();
        this.playSceneContainer.addChild(this.monsters);
        console.log(this.monsters.x + " " + this.monsters.y); // check position
    }

    createHealthBar(){
        this.healthBar = new HealthBar();
        this.healthBar.create();
        this.playSceneContainer.addChild(this.healthBar);
    }
}