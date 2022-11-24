"use strict";
import context from "../../../scripts/context";
import * as Utils from "../../../scripts/utils";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i =25 ;
    while (i > 10){
        
        Utils.drawLine(75,75+i,275,75+i);
        i ++ ;
    }
}