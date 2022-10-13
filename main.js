

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
        buttonDiv.appendChild(btn)

    }
}

const calculator = document.getElementById("calculator")
document.body.addEventListener('keydown',function(e){
    console.log(e.key)
})
const generalDiv = document.createElement('div')

const divInput = document.createElement('div')
divInput.classList.add('divInput')
const input = document.createElement('input')
input.classList.add('input')
input.disabled = true;
input.type = "number"
input.value = 0
divInput.appendChild(input)
const buttonDiv = document.createElement('div')
buttonDiv.classList.add('buttonHub')
// const btn = document.createElement('button')
// btn.classList.add('btn')
// btn.innerHTML = "1"
// buttonDiv.appendChild(btn)
generateButtonHub(24)
calculator.appendChild(divInput)
calculator.appendChild(buttonDiv)
// calculator.appendChild(generalDiv)

