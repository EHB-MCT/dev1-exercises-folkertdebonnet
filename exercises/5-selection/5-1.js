"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
context.fillRect(0,0,width,height);
//drawDots();
//drawFlag1();
//drawFlag2();
//drawFlag3();
//drawFlag4();
//drawFlag5();
drawFlag6();

function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 50 || distance > 100) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 5);
    }



}

function drawFlag1(){
    for(let i = 0 ; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        if(x <width/2) {
            context.fillStyle = "red";
        }else{ 
            context.fillStyle = "green";
        }
        Utils.fillCircle(x,y,5);
    }
}

function drawFlag2(){
    for(let i = 0 ; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        if(y <height/3) {
            context.fillStyle = "red";
        }else if(y<height/3*2){ 
            context.fillStyle = "white";
        }else{context.fillStyle = "blue";}
        Utils.fillCircle(x,y,5);
    }
}
function drawFlag3(){
    for(let i = 0 ; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        if(x <width/4) {
            context.fillStyle = "red";
        }else if(x< width/4*3){ 
            context.fillStyle = "white";
        }else{context.fillStyle = "yellow";}
        Utils.fillCircle(x,y,5);
    }
}

function drawFlag4(){
    for(let i = 0 ; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        if(x <width/5*3 && y<height/3*2) {
            context.fillStyle = "green";
        }else{ 
            context.fillStyle = "white";
        }
        Utils.fillCircle(x,y,5);
    }
}

function drawFlag5(){
    for(let i = 0 ; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        if(x <width/4*3 && x>width/4 && y<height/4*3 && y > height/4) {
            context.fillStyle = "white";
        }else{ 
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x,y,5);
        }
     }

     function drawFlag6(){
        for(let i = 0 ; i < 20000; i++){
            let x = Math.random() * width;
            let y = Math.random() * height;
            let distance = Utils.calculateDistance(width/2,height/2,x,y);
            if(distance < width/5 ){
                context.fillStyle = "red";
            }else{ 
                context.fillStyle = "white";
            }
            Utils.fillCircle(x,y,2);
        }
    }