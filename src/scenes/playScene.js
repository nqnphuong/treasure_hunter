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
        this.createHunter();    
        this.createTreasure(); 
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
    }

    createTreasure(){
        this.treasure = new Treasure();
        this.treasure.create();
        this.playSceneContainer.addChild(this.treasure);
    }

    createHunter(){
        this.hunter = new Hunter();
        this.hunter.create();
        this.playSceneContainer.addChild(this.hunter);
        this.hunter.hunterController();
    }

    createMonsters(){
        this.monsters = new Monsters();
        this.monsters.createMany();
        this.playSceneContainer.addChild(this.monsters);
    }

    createHealthBar(){
        this.healthBar = new HealthBar();
        this.healthBar.create();
        this.playSceneContainer.addChild(this.healthBar);
    }
}