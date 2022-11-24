"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCroshair;

function drawCroshair(eventData){
    
   let x = eventData.pageX;
   let y = eventData.pageY;
   context.strokeStyle ="red";
   context.fillStyle = "white";
   context.lineWidth = 4;
   context.fillRect(0,0,width,height);
    Utils.drawLine(x,0,x,height);
    Utils.drawLine(0,y,width,y);
    
}