"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze(){
    for (let x = 0; x < width; x= x+10){
        for (let y =0; y< height ; y+ 10){
        let generation = Math.round(Math.random());
    console.log(generation);
    context.lineWidth= 5;
    if(generation == 0){
        Utils.drawLine(x,y,x+10,y+10);
    }else{Utils.drawLine(x,y+10,x+10,y);
    }}   
     
}
}
 