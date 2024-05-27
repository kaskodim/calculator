import { deleteErrorCurrentValue } from './deleteErrorCurrentValue.js';
import { playSound } from './playSound.js';
import { changeScreenText } from './changeScreenText.js';
import {
    currentInfo,
    state,
    currentValue,
    NUMBER_AFTER_THE_POINT,
    INFO_NUMBER_AFTER_THE_POINT,
    MAX_DIGITS,
    INFO_NUMBER_OF_DIGITS,
    ROUND_AFTER_THE_POINT,
    audioInfo,
} from '../constants.js';

export function onPressOrOnClickNumber(num) {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    // не позволяет вводить несколько "0" перед числом
    if (state.oneNumber === '0') {
        state.oneNumber = '';
        currentValue.textContent = '';
    }
    if (state.twoNumber === '0') {
        state.twoNumber = '';
        currentValue.textContent = '';
    }

    //  если нажата кнопка "=" первое число набирает заново
    if (state.resultValue !== '' && state.mathematicSign === '') {
        state.oneNumber = '';
        state.resultValue = '';
    }

    // при отсутвующем знаке набирает первое число
    if (state.mathematicSign === '') {

        // ограничивает количество символов после запятой первого числа
        if (state.oneNumber.includes('.') && state.oneNumber.split('.')[1].length === NUMBER_AFTER_THE_POINT) {
            currentInfo.textContent = INFO_NUMBER_AFTER_THE_POINT;
            playSound(audioInfo);
            return
        }

        //  ограничивает количество символов первого целого числа
        if (state.oneNumber.split('.')[0].length === MAX_DIGITS) {
            currentInfo.textContent = INFO_NUMBER_OF_DIGITS;
            playSound(audioInfo);
            return
        }

        // набирает первое число
        state.oneNumber = `${state.oneNumber}${num}`;
        if (state.oneNumber.slice(-1) !== '0') {
            state.oneNumber = (Math.round(+state.oneNumber * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        }
        changeScreenText(state.oneNumber);
    }

    // набирает второе число
    else {
        // ограничивает количество символов после запятой второго числа
        if (state.twoNumber.includes('.') && state.twoNumber.split('.')[1].length === NUMBER_AFTER_THE_POINT) {
            currentInfo.textContent = INFO_NUMBER_AFTER_THE_POINT;
            playSound(audioInfo);
            return
        }
        //  ограничивает количество символов второго целого числа
        if (state.twoNumber.split('.')[0].length === MAX_DIGITS && !state.twoNumber.includes('.')) {
            currentInfo.textContent = INFO_NUMBER_OF_DIGITS;
            playSound(audioInfo);
            return
        }

        // набирает второе число
        state.twoNumber = `${state.twoNumber}${num}`;
        if (state.twoNumber.slice(-1) !== '0') {
            state.twoNumber = (Math.round(+state.twoNumber * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        }
        changeScreenText(state.twoNumber);
    }
}
