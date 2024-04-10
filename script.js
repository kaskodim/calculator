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
const NUMBERS = '1234567890';
const SINGS = '/*-+';

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

function onPressOrOnClickNumber(num) {
    if (oneNumber === '0') {
        oneNumber = '';
        input.textContent = '';
    }
    if (twoNumber === '0') {
        twoNumber = '';
        input.textContent = '';
    }
    if (mathematicSign === '' || oneNumber === '') {
        oneNumber = oneNumber + num;
        changeScreenText(oneNumber);
    }
    else {
        twoNumber = twoNumber + num;
        changeScreenText(twoNumber);
    }
}

function onPressOrOnClickSingn(sign) {
    if (oneNumber === '' && sign === '-') {
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

    mathematicSign = sign;

    if (oneNumber === '') {
        mathematicSign = '';
    }
    else if (sign === 'x') {
        mathematicSign = '*';
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
    numBtn.onclick = onPressOrOnClickNumber.bind(null, numBtn.innerHTML);
})

arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = onPressOrOnClickSingn.bind(null, signBtn.textContent)
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

document.getElementById('root').addEventListener('keydown', (event) => {
    if (event.key === 'Delete' || event.key === 'Escape') {
        btnReset.click();
    }
    if (event.key === 'Backspace') {
        btnBack.click();
    }
    if (NUMBERS.includes(event.key)) {
        onPressOrOnClickNumber(event.key);
    }
    if (SINGS.includes(event.key)) {
        onPressOrOnClickSingn(event.key);
    }
    if (event.key === '.') {
        btnPoint.click();
    }
    if (event.key === 'Enter') {
        btnResult.click();
    }
})
