"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let size = 800;

draw();

function draw() {
    context.fillRect(0, 0, width, height);
    drawNoiseCircle();
}

function drawNoiseCircle() {
    for (let i = 0; i < 35; i++) {
        context.fillStyle = Utils.hsl(i * 12, 100, 50);
        for (let j = 0; j < size; j++) {
            let x = (width / 2) - (size / 2) + j;
            let y = (width / 2) - (size / 2) + j;
            Utils.fillCircle(x, 70+ i * 25, 4);
        }
    }
    //cover with a really thick stroke circle and 2 black rectangles above and below
    context.lineWidth = size / 3;
   // Utils.strokeCircle(width / 2, height / 2, size * 5 / 8);
    context.fillStyle = "black";
    context.fillRect(width / 2 - size / 2 - 10, 0, size + 20, (height - size) / 2);
    context.fillRect(width / 2 - size / 2 - 10, (height - size) / 2 + size, size + 20, (height - size) / 2);
    context.textAlign = "center";
    context.fillStyle = "gray";
    context.font = "bold 24pt Arial";

}