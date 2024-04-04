const input = document.getElementById('input');
/*  получает кнопки по общему классу    */
const numberBtns = document.getElementsByClassName('numberButton');
/*  коллекцию в массив  */
const arrNumberBtns = Array.from(numberBtns);
const btnSigns = document.getElementsByClassName('btn-matSigns');
const arrBtnSigns = Array.from(btnSigns);
const btnBack = document.getElementById('buttonBackspace');
const btnReset = document.getElementById('buttonReset');
const btnResult = document.getElementById('buttonResult');
const divisionByZero = 'на 0 делить нельзя';

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';
let result = '';

function allReset() {
    oneNumber = '';
    twoNumber = '';
    mathematicSign = '';
    result = '';
}

btnReset.onclick = () => {
    input.value = '';
    allReset()
}

btnBack.onclick = () => {
    if (input.value === divisionByZero) {
        input.value = '';
        allReset();
    }
    if (twoNumber === '') {
        input.value = input.value.slice(0, -1);
        oneNumber = input.value;
    }
    else {
        input.value = input.value.slice(0, -1);
        twoNumber = input.value;
    }
}

arrNumberBtns.forEach((btnNum) => {
    btnNum.onclick = () => {
        if (mathematicSign === '' || oneNumber === '') {
            oneNumber = oneNumber + btnNum.innerHTML;
            input.value = oneNumber;
        }
        else {
            twoNumber = twoNumber + btnNum.innerHTML;
            input.value = twoNumber;
        }
    }
})

arrBtnSigns.forEach((btnSign) => {
    btnSign.onclick = () => {
        if (mathematicSign === '/' && twoNumber === '0') {
            input.value = divisionByZero;
            return
        }

        if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
            result = eval(oneNumber + mathematicSign + twoNumber);
            input.value = result;
            oneNumber = result;
            twoNumber = '';
        }

        mathematicSign = btnSign.textContent;

        if (oneNumber === '') {
            mathematicSign = '';
        }
        else if (btnSign.textContent === 'x') {
            mathematicSign = '*';
        }
    }
})

btnResult.onclick = () => {
    if (mathematicSign === '/' && twoNumber === '0') {
        input.value = divisionByZero;
    }
    else {
        result = eval(oneNumber + mathematicSign + twoNumber);
        input.value = result;
        oneNumber = result;
        mathematicSign = '';
        twoNumber = '';
    }
}
