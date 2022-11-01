let a = "" 
let sign = "" 
let finish = false

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const operations = ["-", "+", "x", "/", "%", "(", ")"]

let display = document.querySelector(".display p")

function clearAll() {
    a = ""
    b = ""
    sign = ""
    finish = false
    display.textContent = 0
}

document.querySelector(".c").addEventListener("click", () => {
    clearAll()
})

document.querySelector(".buttons").addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn")) return
    if (event.target.classList.contains("c")) return

    display.textContent = ""

    let key = event.target.textContent

    if (numbers.includes(key)) {
        if (b === "" && sign === "") {
            a += key
            display.textContent = a
        } else if (a !== "" && b !== "" && finish) {
            b = key
            finish = false
            display.textContent = b
        } else {
            b += key
            display.textContent = b
        }
        return
    }

    if (operations.includes(key)) {
        sign = key
        display.textContent = sign
        return
    }


    if (key == "=") {
        switch (sign) {
            case "+":
                a = (+a) + (+b)
                break;
            case "-":
                a = a - b
                break;
            case "*":
                a = a * b
                break;
            case "/":
                if (b === "0") {
                    display.textContent = "Oшибка"
                    a = ""
                    b = ""
                    sign = ""
                    return
                }
                a = a / b
                break;
            case "%":
                a = a / 100
                break;
        }
        finish = true
        display.textContent = a
    }
})