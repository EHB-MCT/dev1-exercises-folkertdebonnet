"use strict";
import context from"../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width= context.canvas.width;
let height = context.canvas.height;

drawLines();

function drawLines () {
    
    let step = 10;
    let amount = width/step ;
    for(let i =0 ; i< amount ; i++){
        utils.drawLine( i*step , 0 , width-(i*step),height);
    }
}