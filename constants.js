export const root = document.getElementById('root');
export const currentValue = document.getElementById('currentValue');
export const currentInfo = document.getElementById('currentInfo');
//  получает кнопки по общему классу в коллекцию
export const numberBtns = document.getElementsByClassName('numberButton');
//  коллекцию в массив 
export const arrNumberBtns = Array.from(numberBtns);
export const btnSigns = document.getElementsByClassName('btnMathSigns');
export const arrBtnSigns = Array.from(btnSigns);
export const btnBack = document.getElementById('buttonBackspace');
export const btnReset = document.getElementById('buttonReset');
export const btnResult = document.getElementById('buttonResult');
export const btnChangeSign = document.getElementById('buttonPolarity');
export const btnPoint = document.getElementById('buttonPoint');
export const buttons = document.getElementsByTagName('button');
export const arrButtons = Array.from(buttons);
export const soundCheckbox = document.getElementById('toggle');

export const audioPressDown = new Audio('./audio/pressDown.wav');
export const audioPressUp = new Audio('./audio/pressUp.wav');
export const audioToggleOn = new Audio('./audio/toggleSoundOn.wav');
export const audioToggleOff = new Audio('./audio/toggleSoundOff.wav');
export const audioError = new Audio('./audio/error.wav');
export const audioInfo = new Audio('./audio/info.wav');
 
export const MAX_DIGITS = 11;
export const NUMBER_AFTER_THE_POINT = 3;
export const NUMBERS = '1234567890';
export const SINGS = '/*-+';
export const ROUND_AFTER_THE_POINT = 10 ** NUMBER_AFTER_THE_POINT;
 
export const DIVISION_BY_ZERO = 'на 0 делить нельзя';
export const ERROR = 'ошибка';
export const ERROR_INFO = 'ограничение символов для результата';
export const INFO_NUMBER_OF_DIGITS = `только ${MAX_DIGITS} символов`;
export const INFO_NUMBER_AFTER_THE_POINT = `только ${NUMBER_AFTER_THE_POINT} цифры после запятой`;
export const CHECK_SOUND = 'checkSound';
 
export const state = {
    oneNumber: '',
    twoNumber: '',
    mathematicSign: '',
    resultValue: '',
}