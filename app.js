function inputNumber(number){
    var outputnumber = document.getElementById("input-below");
    outputnumber.value += number
}

function clearbtn(){
    var outputnumber = document.getElementById("input-below");
    outputnumber.value = ""
}
function equate(){
    var outputnumber = document.getElementById("input-below");
    outputnumber.value = eval(outputnumber.value)
}

