"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


randomColours(25,25,400,400);
randomColours(50,50,350,350);
randomColours(75,75,300,300);
randomColours(100,100,250,250);
randomColours(125,125,200,200);
randomColours(150,150,150,150);
randomColours(175,175,100,100);
randomColours(200,200,50,50);




function randomColours(x,y,width,height){ 
    context.beginPath(); 
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let color ="rgb("+ red +","+ green +","+ blue +")";
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
  
     }