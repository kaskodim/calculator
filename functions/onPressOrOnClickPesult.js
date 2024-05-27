import { showDivisionByZeroError } from './showDivisionByZeroError.js';
import { playSound } from './playSound.js';
import { changeScreenText } from './changeScreenText.js';
import {
    currentInfo,
    state,
    MAX_DIGITS,
    ROUND_AFTER_THE_POINT,
    ERROR_INFO,
    ERROR,
    audioError,
} from '../constants.js';

export function onPressOrOnClickPesult() {
    currentInfo.textContent = '';

    if (state.oneNumber === '' || state.mathematicSign === '' || state.twoNumber === '') {
        return
    }
    if (state.mathematicSign === '/' && state.twoNumber === '0') {
        showDivisionByZeroError();
        playSound(audioError);
    }
    else {
        let result = eval(state.oneNumber + ' ' + state.mathematicSign + ' ' + state.twoNumber);
        result = (Math.round(+result * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        if ((result.toString()).length <= MAX_DIGITS) {
            changeScreenText(result);
            state.oneNumber = result;
            state.resultValue = result;
            state.mathematicSign = '';
            state.twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
            playSound(audioError);
        }
    }
}

