let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let convertorsTemplate = document.getElementById("convertors")  


// Calculating the values
convertBtn.addEventListener("click", function() {
    let userValue = inputEl.value
    let meterValue = (userValue * 3.28084).toFixed(2) 
    let feetValue = (userValue * 3.28084).toFixed(2)
    let gallonsValue = (userValue / 3.785).toFixed(2) 
    let litersValue = (userValue * 3.785).toFixed(2) 
    let poundesValue = (userValue * 2.205).toFixed(2) 
    let kiloValue = (userValue / 2.205).toFixed(2) 
    
    // Convertors section
    document.getElementById("length-convertor").innerHTML = `${userValue} meter = ${feetValue} | ${userValue} feet = ${meterValue} meter`
    document.getElementById("volume-convertor").innerHTML = `${userValue} liters = ${gallonsValue} gallons | ${userValue} gallons = ${litersValue} liters` 
    document.getElementById("mass-convertor").innerHTML = `${userValue} kilos = ${poundesValue} pounds | ${userValue} pounds = ${kiloValue} kilos`


    

})
