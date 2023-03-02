let rect=document.getElementById("rectangle")
let button=document.getElementById("btn")
let first=document.getElementById("line1")
let second=document.getElementById("line2")
let third=document.getElementById("line3")

button.addEventListener("click",function(){
    let userInput=document.getElementById("user-input").value  
    meterTofeet(userInput)
    feetTometer(userInput)
    literTogallon(userInput)
    gallonToliter(userInput)
    kilosTopound(userInput)
    poundToKilos(userInput)
})

function meterTofeet(num){
    let answer=num*3.281
    return first.innerHTML=`${num} meters = ${answer.toFixed(3)} feet `
}

function feetTometer(num){
    let answer=num/ 3.281
    return first.innerHTML += `| ${num} feet = ${answer.toFixed(3)} meters`
}


function literTogallon(num){
    let answer=num/ 3.785
    return second.innerHTML=`${num} liters = ${answer.toFixed(3)} gallons `
}

function gallonToliter(num){
    let answer=num*3.785
    return second.innerHTML+=`| ${num} gallons = ${answer.toFixed(3)} liters `
}
function kilosTopound(num){
    let answer=num*2.204
    return third.innerHTML=`${num} kilos = ${answer.toFixed(3)} pounds `
}

function poundToKilos(num){
    let answer=num/2.204
    return third.innerHTML+=`| ${num} pounds = ${answer.toFixed(3)} kilos `
}