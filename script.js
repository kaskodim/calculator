const input = document.getElementById('currentValue');
/*  получает кнопки по общему классу в коллекцию   */
const numberBtns = document.getElementsByClassName('numberButton');
/*  коллекцию в массив  */
const arrNumberBtns = Array.from(numberBtns);
const btnSigns = document.getElementsByClassName('btnMathSigns');
const arrBtnSigns = Array.from(btnSigns);
const btnBack = document.getElementById('buttonBackspace');
const btnReset = document.getElementById('buttonReset');
const btnResult = document.getElementById('buttonResult');
const btnChangeSign = document.getElementById('buttonPolarity');
const btnPoint = document.getElementById('buttonPoint');
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

function addingPoint(variable) {
    if (variable.includes('.')) {
        return variable;
    }
    else if (variable === '') {
        return variable;
    }
    else {
        variable = variable + '.';
        changeScreenText(variable);
        return variable;
    }
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

btnChangeSign.onclick = () => {
    if (oneNumber[0] === '-' && twoNumber === '') {
        oneNumber = oneNumber.slice(1);
        changeScreenText(oneNumber);
    }
    else if (oneNumber[0] !== '-' && twoNumber === '') {
        oneNumber = '-' + oneNumber;
        changeScreenText(oneNumber);
    }
    else if (twoNumber[0] === '-') {
        twoNumber = twoNumber.slice(1);
        changeScreenText(twoNumber);
    }
    else if (twoNumber[0] !== '-') {
        twoNumber = '-' + twoNumber;
        changeScreenText(twoNumber);
    }
}

arrNumberBtns.forEach((numBtn) => {
    numBtn.onclick = () => {
        if (oneNumber === '0') {
            oneNumber = '';
            input.textContent = '';
        }
        if (twoNumber === '0') {
            twoNumber = '';
            input.textContent = '';
        }
        if (mathematicSign === '' || oneNumber === '') {
            oneNumber = oneNumber + numBtn.innerHTML;
            changeScreenText(oneNumber);
        }
        else {
            twoNumber = twoNumber + numBtn.innerHTML;
            changeScreenText(twoNumber);
        }
    }
})

arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = () => {
        if (oneNumber === '' && signBtn.textContent === '-') {
            btnChangeSign.onclick();
            return;
        }
        if (mathematicSign === '/' && twoNumber === '0') {
            showDivisionByZeroError();
            return
        }
        if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
            let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
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

btnPoint.onclick = () => {
    if (mathematicSign === '') {
        oneNumber = addingPoint(oneNumber);
    }
    else {
        twoNumber = addingPoint(twoNumber);
    }
}

btnResult.onclick = () => {
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
    }
    else {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        changeScreenText(result);
        oneNumber = result;
        mathematicSign = '';
        twoNumber = '';
    }
}
