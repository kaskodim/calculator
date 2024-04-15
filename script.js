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
const buttons = document.getElementsByTagName('button');
const arrbuttons = Array.from(buttons);

const DIVISION_BY_ZERO = 'на 0 делить нельзя';
const NUMBERS = '1234567890';
const SINGS = '/*-+';

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';

btnReset.onclick = onPressOrOnClickReset;
btnBack.onclick = onPressOrOnClickBack;
btnChangeSign.onclick = onPressOrOnClickChangeSign;
arrNumberBtns.forEach((numBtn) => {
    numBtn.onclick = onPressOrOnClickNumber.bind(null, numBtn.innerHTML);
})
arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = onPressOrOnClickSingn.bind(null, signBtn.textContent);
})
btnPoint.onclick = onPressOrOnClickPoint;
btnResult.onclick = onPressOrOnClickPesult;

document.getElementById('root').addEventListener('keydown', (event) => {
    if (event.key === 'Delete' || event.key === 'Escape') {
        onPressOrOnClickReset();
    }
    if (event.key === 'Backspace') {
        onPressOrOnClickBack();
    }
    if (NUMBERS.includes(event.key)) {
        onPressOrOnClickNumber(event.key);
    }
    if (SINGS.includes(event.key)) {
        onPressOrOnClickSingn(event.key);
    }
    if (event.key === '.' || event.key === ',') {
        onPressOrOnClickPoint();
    }
    if (event.key === 'Enter') {
        onPressOrOnClickPesult();
    }
})

document.getElementById('root').addEventListener('keydown', (event) => {
    const keyboardKey = getButton(event.key);
    if (keyboardKey !== undefined) {
        keyboardKey.classList.add('btnActive');
    }
})

document.getElementById('root').addEventListener('keyup', (event) => {
    const keyboardKey = getButton(event.key);
    if (keyboardKey !== undefined) {
        keyboardKey.classList.remove('btnActive');
    }
})
