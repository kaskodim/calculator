const input = document.getElementById('currentValue');
/*  получает кнопки по общему классу    */
const numberBtns = document.getElementsByClassName('numberButton');
/*  коллекцию в массив  */
const arrNumberBtns = Array.from(numberBtns);
const btnSigns = document.getElementsByClassName('btnMathSigns');
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

function showDivisionByZeroError() {
    input.textContent = DIVISION_BY_ZERO;
    input.classList.add('error');
    allReset();
}

function changeScreenText(screenText) {
    input.classList.remove('error');
    input.textContent = screenText;
}

btnReset.onclick = () => {
    input.textContent = '';
    allReset();
}

btnBack.onclick = () => {
    if (input.textContent === DIVISION_BY_ZERO) {
        input.textContent = '';
        allReset();
    }
    if (twoNumber === '') {
        changeScreenText(input.textContent.slice(0, -1));
        oneNumber = input.textContent;
    }
    else {
        changeScreenText(input.textContent.slice(0, -1));
        twoNumber = input.textContent;
    }
}

arrNumberBtns.forEach((numBtn) => {
    numBtn.onclick = () => {
        if (oneNumber === '0') {
            oneNumber = '';
            input.textContent = ''
        }
        if (twoNumber === '0') {
            twoNumber = '';
            input.textContent = ''
        }
        if (mathematicSign === '' || oneNumber === '') {
            oneNumber = oneNumber + numBtn.innerHTML;
            changeScreenText(oneNumber)
        }
        else {
            twoNumber = twoNumber + numBtn.innerHTML;
            changeScreenText(twoNumber);
        }
    }
})

arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = () => {
        if (mathematicSign === '/' && twoNumber === '0') {
            showDivisionByZeroError();
            return
        }

        if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
            let result = eval(oneNumber + mathematicSign + twoNumber);
            changeScreenText(result);
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
        showDivisionByZeroError();
    }
    else {
        let result = eval(oneNumber + mathematicSign + twoNumber);
        changeScreenText(result);
        oneNumber = result;
        mathematicSign = '';
        twoNumber = '';
    }
}
