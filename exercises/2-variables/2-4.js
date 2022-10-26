"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width= context.canvas.width;
let height = context.canvas.height;
sunset();

function sunset(){
    context.fillStyle = "#ea9e24";
    context.fillRect(0,0,width,height/4);
    context.fillStyle = "  #fc701b";
    context.fillRect(0,height/4,width,height/4);
    context.fillStyle = "#a51f02 ";
    context.fillRect(0,height/4*2,width,height/4);
    context.fillStyle = "#ffffc8";
    context.arc(width/2,height/2,width/4,0,2*Math.PI,true);
    context.fill();
    context.fillStyle = "#00198c ";
    context.fillRect(0,height/4*3,width,height/4);


}