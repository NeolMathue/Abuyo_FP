const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1); 
    
    if ((input === "+" || input === "-" || input === "*" || input === "/") && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {
       
        return;
    }
    display.value += input;
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); 
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
