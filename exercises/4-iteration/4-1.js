"use strict";
import context from"../../scripts/context.js";
import * as utils from "../../scripts/utils.js";
import { drawLine } from "../../scripts/utils.js";

let width= context.canvas.width;
let height = context.canvas.height;

wormHole();

function wormHole(){
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.rect(0,0,600,300);
    context.fill();
    
    for(let i = 0 ; i <60 ; i++){
        utils.drawLine(i*10,0,600-(i*10),300);
    }
    for(let i = 0 ; i <31 ; i++){
        utils.drawLine(0,i*10,600,300-(i*10));
    }
}