"use strict";
import context from"../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width= context.canvas.width;
let height = context.canvas.height;

brickwall();

function brickwall(){ 
    context.fillStyle = "darkred";
    for (let i = 0 ; i < 6 ; i ++ ) {
        let brickwidth = 100 ;
        let brickheight = 50;
        context.fillRect(50+(i*(brickwidth +10)),(brickheight+10),brickwidth,brickheight);
        context.fillRect(100+(i*(brickwidth+10)),110,brickwidth,brickheight);
        context.fillRect(50+(i*(brickwidth+10)),160,brickwidth,brickheight);
        context.fillRect(100+(i*(brickwidth + 10)),230,brickwidth,brickheight);
        context.fillRect(50+(i*(brickwidth+10)),290,brickwidth,brickheight);
        context.fillRect(100+(i*(brickwidth+10)),350,brickwidth,brickheight);
    }
    
   
}