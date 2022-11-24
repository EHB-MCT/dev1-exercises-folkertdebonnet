"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numbers = [];
setupnumbers();
calculteAverage();


function setupnumbers(){
    for(let i = 0 ; i<1000 ; i++){
       numbers[i] = Utils.randomNumber(0,100);  
    }
}
function calculteAverage(){
    let sum = 0 ;
    for(let j = 0 ; j < numbers.length ; j++){
        sum = sum + numbers[j];
    }
    console.log(sum);
    let average = sum/numbers.length;
    console.log(average);
}