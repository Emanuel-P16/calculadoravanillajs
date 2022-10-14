const getinputfield = (key) => {
    let keyValue = '0'
    switch (key) {
        case '1':
            keyValue = '1'
            break;
        case '2':
            keyValue = '2'
            break;
        case '3':
            keyValue = '3';
            break;
        case '4':
            keyValue = '4';
            break;
        case '5':
            keyValue = '5';
            break;
        case '6':
            keyValue = '6';
            break;
        case '7':
            keyValue = '7';
            break;
        case '8':
            keyValue = '8';
            break;
        case '9':
            keyValue = '9';
            break;
        case '0':
            keyValue = '0';
            break;
        case '-':
            keyValue = "-"
            break;
        case "+":
            keyValue = "+"
            break;
        case "/":
            keyValue = "/"
            break;
        case "*":
            keyValue = "*"
            break;
        case "Escape":
            keyValue="escape";
            break;
        default:
            keyValue = ''
            break;

    }
    return keyValue
}

const getCalculatorValue = (index) => {
    switch (index) {
        case 0:
            btnproperty = '%'
            break;
        case 1:
            btnproperty = 'CE'
            break;
        case 2:
            btnproperty = 'C'
            break;
        case 3:
            btnproperty = 'X'
            break;
        case 4:
            btnproperty = '1/X'
            break;
        case 5:
            btnproperty = 'x2'
            break;
        case 6:
            btnproperty = '√2'
            break;
        case 7:
            btnproperty = '/'
            break;
        case 8:
            btnproperty = '7'
            break;
        case 9:
            btnproperty = '8'
            break;
        case 10:
            btnproperty = '9'
            break;
        case 11:
            btnproperty = 'X'
            break;
        case 12:
            btnproperty = '4'
            break;
        case 13:
            btnproperty = '5'
            break;
        case 14:
            btnproperty = '6'
            break;
        case 15:
            btnproperty = '-'
            break;
        case 16:
            btnproperty = '1'
            break;
        case 17:
            btnproperty = '2'
            break;
        case 18:
            btnproperty = '3'
            break;
        case 19:
            btnproperty = '+'
            break;
        case 20:
            btnproperty = '+/-'
            break;
        case 21:
            btnproperty = '0'
            break;
        case 22:
            btnproperty = ','
            break;
        case 23:
            btnproperty = '='
            break;
        default:
            btnproperty = '0'
            break;
    }
    return btnproperty
}

const generateButtonHub = (amount) => {
    let btnproperty = ''
    for (let index = 0; index < amount; index++) {
        const btn = document.createElement('button')
        btnproperty = getCalculatorValue(index)
        btn.innerHTML = btnproperty
        btn.classList.add('btn')
        if (btnproperty === "=") {
            btn.classList.add('equal')
        }
        buttonDiv.appendChild(btn)

    }
}

const buttonInput = (e) => {
    let actualValue = document.getElementById('input').value
    let keyValue = getinputfield(e.key)
    if (keyValue === '') {
        return null
    }
    if (keyValue === "escape"){
        actualValue = "0"
        keyValue = '0'
    }
    if (actualValue === '0') {
        actualValue = ''
    }
    document.getElementById('input').setAttribute('value', actualValue + keyValue)
    document.getElementById('input').value = actualValue + keyValue

}

const calculator = document.getElementById("calculator")

document.body.addEventListener('keydown', buttonInput)
const generalDiv = document.createElement('div')

const divInput = document.createElement('div')
divInput.classList.add('divInput')
const input = document.createElement('input')
input.classList.add('input')
input.id = 'input'
input.disabled = true;
input.type = "text"
input.value = "0"
input.name = "input"
divInput.appendChild(input)
const buttonDiv = document.createElement('div')
buttonDiv.classList.add('buttonHub')
generateButtonHub(24)
calculator.appendChild(divInput)
calculator.appendChild(buttonDiv)

