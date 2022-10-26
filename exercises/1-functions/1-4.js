"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

bleublockpuzzle();

function bleublockpuzzle(){
    context.beginPath();
    context.rect(50,50,350,350);
    context.fillStyle = 'lightblue';
    context.fill();
    context.rect(50,50,350,350);
    context.moveTo(50,350);
    context.lineTo(350,350);
    context.lineTo(350,50);
    context.moveTo(100,50);
    context.lineTo(100,300);
    context.lineTo(350,300);
    context.stroke();
    
}