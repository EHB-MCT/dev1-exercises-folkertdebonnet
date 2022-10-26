"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width= context.canvas.width;
let height = context.canvas.height;
pattern();

function pattern(){
    context.fillStyle= "#3498db";
    
    context.fillRect(0,height/3*2,width,height/3);
    context.fillStyle= "#2c3e50";
    context.fillRect(0,0,width,height/3*2);
    context.fillStyle = "#ecf0f1 ";
    context.fillRect(width/3,0,width/3,height);
    context.fillStyle = "#e74c3c";
    context.fillRect(0,height/6,width,height/6*2);
    

}