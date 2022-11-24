"use strict";
import context from"../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width= context.canvas.width;
let height = context.canvas.height;

drawBubbles();

function drawBubbles(){
    context.fillRect(0,0,width,height);
    

    
    for(let i=0 ; i< utils.randomNumber(5,300);i++){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let opacity = Math.random();
    let color ="rgba("+ red +","+ green +","+ blue +","+ opacity + ")";

    utils.fillCircle(utils.randomNumber(200,width-200),utils.randomNumber(200,height-200),utils.randomNumber(50,150)); 
    context.fillStyle = color ;   
}
}
