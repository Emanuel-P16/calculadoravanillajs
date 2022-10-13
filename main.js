

const generateButtonHub = (amount) => {
    let btnproperty = ''
    for (let index = 0; index < amount; index++) {
        const btn = document.createElement('button')
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

            default:
                btnproperty = '0'
                break;
        }
        btn.innerHTML = btnproperty
        btn.classList.add('btn')
        buttonDiv.appendChild(btn)
    }
}

const calculator = document.getElementById("calculator")
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

