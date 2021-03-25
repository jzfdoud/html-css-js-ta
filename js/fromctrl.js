function button_click(){
    let inCtrl = document.getElementById("inp");
    let inValue = inCtrl.value;
    let outCtrl = document.getElementById("outp");
    outCtrl.value = inValue;
    console.log("The secret was entered");
}