const root = document.getElementById('root');
const currentValue = document.getElementById('currentValue');
const currentInfo = document.getElementById('currentInfo');
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
const arrButtons = Array.from(buttons);

const DIVISION_BY_ZERO = 'на 0 делить нельзя';
const NUMBERS = '1234567890';
const SINGS = '/*-+';
const ERROR = 'ошибка';
const ERROR_INFO = 'ограничение символов для результата';

const MAX_DIGITS = 11; 
const INFO_NUMBER_OF_DIGITS = `только ${MAX_DIGITS} символов`;
const NUMBER_AFTER_THE_POINT = 3;
const INFO_NUMBER_AFTER_THE_POINT = 'только 3 цифры после запятой';

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';
let resultValue = '';

root.focus();
root.addEventListener('click', () => {
    root.focus();
})

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

root.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        onPressOrOnClickBack();
    }
    if (event.repeat) return;
    if (event.key === 'Delete' || event.key === 'Escape') {
        onPressOrOnClickReset();
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

root.addEventListener('keydown', (event) => {
    const keyboardKey = getButton(event.key);
    if (keyboardKey !== undefined) {
        keyboardKey.classList.add('btnActive');
    }
})

root.addEventListener('keyup', (event) => {
    const keyboardKey = getButton(event.key);
    if (keyboardKey !== undefined) {
        keyboardKey.classList.remove('btnActive');
    }
})

