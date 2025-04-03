
    const display = document.getElementById("display");

    function passValue(input) {
        display.value += input;
    }

    function clearVal() {
        display.value = "";
    }

    function equal() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "ERROR";
        }
    }
