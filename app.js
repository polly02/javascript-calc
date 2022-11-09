let a = ""
let b = ""
let sign = ""
let finish = false

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const operations = ["-", "+", "x", "/", "%", "x!", "^", "rev", "√", "date", "+/-"]

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
            case "x":
                a = (a * b)
                break;
            case "/":
                if (b === "0") {
                    display.textContent = "Oшибка"
                    a = ""
                    b = ""
                    sign = ""
                    return
                }
                a = (a / b)
                break;
            case "%":
                a = (a / 100)
                break;
            case "rev":
                a = (a.split("").reverse().join(""))
                break;
            case "√":
                a = Math.sqrt(a)
                break;
            case "date":
                const data = new Date(),
                    day = data.getDate(),
                    month = data.getMonth() + 1,
                    year = data.getFullYear()
                a = `${day}.${month}.${year}`;
                break;
            case "^":
                a = (a ** b)
                break;
            case "+/-":
                if (a === a) {
                    a = -a
                } else {
                    a = a
                }
                break;
            case "x!":
                let res = 1
                for (let i = 1; i <= a; i++) {
                    res *= i
                }
                a = res
                break;
        }
        finish = true
        display.textContent = a
    }
})

const back = document.querySelector(".back")
let count = 0

document.querySelector(".tema").addEventListener("click", () => {
    if (count % 2 == 0) {
        back.style = "background:   #183958"
        display.style = "color: rgb(202, 234, 254)"
        document.querySelectorAll(".buttons .btn").style = "color: #33526f"
        count++
    } else if (count % 2 == 1) {
        back.style = "background:   rgb(202, 234, 254)"
        display.style = "color: rgba(0, 0, 0, 1)"
        count++
    }
})