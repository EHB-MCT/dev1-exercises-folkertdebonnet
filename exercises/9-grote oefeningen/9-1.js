"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let xPlayer = 0;
let yPlayer = 0;

Agar();
window.onmousemove = setup;
function setup(eventData){
    let e = eventData;
    let xPlayer = e.pageX;
    let yPlayer = e.pageY;
    context.fillStyle = 'red';
    

}

function Agar (){
    context.fillStyle = 'white';
    context.fillRect(0,0,width,height);
    let xEnemy = 50;
    let yEnemy = 50;
    let sizeE = 30;
    let grow = 0;
    let SizeP = 20 + grow;
    Utils.fillCircle(xPlayer,yPlayer,SizeP);
    context.fillStyle= 'green';
    Utils.fillCircle(xEnemy,yEnemy,sizeE);
    if(xPlayer ==xEnemy  && yPlayer==yEnemy ){
        let grow =  10 ;
    }

}



