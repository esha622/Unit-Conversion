/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn= document.getElementById("convert-btn")
let inputEl= document.getElementById("input")
let lengthEl= document.getElementById("length-el")
let volumeEl= document.getElementById("volume-el")
let massEl= document.getElementById("mass-el")

const metertofeet= 3.281
const feettometer= 0.305
const litertogallon= 0.264
const gallontoliter= 3.788
const kgtopound= 2.204
const poundtokg= 0.454

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * metertofeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feettometer).toFixed(3)} meter`
    volumeEl.textContent = `${baseValue} liter = ${(baseValue * litertogallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue * gallontoliter).toFixed(3)} liter`
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kgtopound).toFixed(3)} pound | ${baseValue} pond = ${(baseValue * poundtokg).toFixed(3)} kilogram`
    
})
