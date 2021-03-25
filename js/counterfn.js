let counter = 0;
let resetVal = 0;

const inc = () => {
    counter++;
    display();
}
const dec = () =>{
    counter--;
    display();
}

const display = () => {
    let ctrl = document.getElementById("inp");
    console.log(`The value of counter is now ${counter}.`);
    inp.style.color = (counter %2 ==0 ) ? "red" : "black";
    inp.style.fontWeight = (counter %3==0) ? "bold" : "normal";
    inp.style.fontStyle = (counter %7==0) ? "italic" : "normal";
    ctrl.value=counter; 
}

const reset = () => {
    counter = 0;
    console.warn(`The counter has been reset to ${counter}.`);
    display();
}