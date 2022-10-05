"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawname();

function drawname (){
    context.beginPath();
    context.lineWidth = 3.5;
    context.moveTo(50,200);
    context.lineTo(50,50);
    context.lineTo(150,50);
    context.moveTo(50,120);
    context.lineTo(100,120);
    context.strokeStyle = "blue";
    context.stroke();

    context.beginPath();
    context.moveTo(150,200);
    context.lineTo(150,100);
    context.lineTo(250,100);
    context.lineTo(250,200);
    context.lineTo(150,200);
    context.strokeStyle = "green";
    context.stroke();

    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(300,200);
    context.lineTo(375,200);
    context.strokeStyle = "yellow";
    context.stroke();

    context.beginPath();
    context.moveTo(425,200);
    context.lineTo(425,50);
    context.moveTo(425,125);
    context.lineTo(525,50);
    context.moveTo(425,125);
    context.lineTo(525,200);
    context.strokeStyle ="red";
    context.stroke();

    context.beginPath();
    context.moveTo(675,50);
    context.lineTo(575,50);
    context.lineTo(575,200);
    context.lineTo(675,200);
    context.moveTo(575,125);
    context.lineTo(675,125);
    context.strokeStyle= "orange";
    context.stroke();

    context.beginPath();
    context.moveTo(725,200);
    context.lineTo(725,50);
    context.lineTo(825,50);
    context.lineTo(825,125);
    context.lineTo(725,125);
    context.lineTo(825,200);
    context.strokeStyle ="black";
    context.stroke();
    
    context.beginPath();
    context.moveTo(875,50);
    context.lineTo(1005,50);
    context.moveTo(940,50);
    context.lineTo(940,200);
    context.strokeStyle = "purple";
    context.stroke();

}