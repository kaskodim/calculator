const input = document.getElementById('input');
/*  получает кнопки по общему классу    */
const numberBtns = document.getElementsByClassName('numberButton');
/*  коллекцию в массив  */
const arrNumberBtns = Array.from(numberBtns);
const btnSigns = document.getElementsByClassName('btn-mathSigns');
const arrBtnSigns = Array.from(btnSigns);
const btnBack = document.getElementById('buttonBackspace');
const btnReset = document.getElementById('buttonReset');
const btnResult = document.getElementById('buttonResult');
const DIVISION_BY_ZERO = 'на 0 делить нельзя';

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';

function allReset() {
    oneNumber = '';
    twoNumber = '';
    mathematicSign = '';
}

btnReset.onclick = () => {
    input.value = '';
    allReset()
}

btnBack.onclick = () => {
    if (input.value === DIVISION_BY_ZERO) {
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

arrNumberBtns.forEach((numBtn) => {
    numBtn.onclick = () => {
        if (mathematicSign === '' || oneNumber === '') {
            oneNumber = oneNumber + numBtn.innerHTML;
            input.value = oneNumber;
        }
        else {
            twoNumber = twoNumber + numBtn.innerHTML;
            input.value = twoNumber;
        }
    }
})

arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = () => {
        if (mathematicSign === '/' && twoNumber === '0') {
            input.value = DIVISION_BY_ZERO;
            return
        }

        if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
            let result = eval(oneNumber + mathematicSign + twoNumber);
            input.value = result;
            oneNumber = result;
            twoNumber = '';
        }

        mathematicSign = signBtn.textContent;

        if (oneNumber === '') {
            mathematicSign = '';
        }
        else if (signBtn.textContent === 'x') {
            mathematicSign = '*';
        }
    }
})

btnResult.onclick = () => {
    if (mathematicSign === '/' && twoNumber === '0') {
        input.value = DIVISION_BY_ZERO;
    }
    else {
        let result = eval(oneNumber + mathematicSign + twoNumber);
        input.value = result;
        oneNumber = result;
        mathematicSign = '';
        twoNumber = '';
    }
}
