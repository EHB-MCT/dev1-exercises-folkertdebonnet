"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let framecount = 0 ;
let x =width/2;
let y = height/2;
let sX = 10;
let sY = 10;
bouncingBubble();

function bouncingBubble(){
    framecount++;
    
    if(x>width)
        { sX = -sX; }
    if(x<0){sX = Math.abs(sX);}
    if(y>height)
        { sY = -sY; }
    if(y<0){sY = Math.abs(sY);}
    console.log(sX);
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);
    context.fillStyle ="blue";
    Utils.fillCircle(x= x+sX,y= y +sY,100);
    requestAnimationFrame(bouncingBubble);
    
}