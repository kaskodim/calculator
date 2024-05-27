import { deleteErrorCurrentValue } from './deleteErrorCurrentValue.js';
import { showDivisionByZeroError } from './showDivisionByZeroError.js';
import { playSound } from './playSound.js';
import { changeScreenText } from './changeScreenText.js';
import {
    currentInfo,
    state,
    ROUND_AFTER_THE_POINT,
    btnChangeSign,
    MAX_DIGITS,
    ERROR_INFO,
    ERROR,
    audioError,
} from '../constants.js';

export function onPressOrOnClickSingn(sign) {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    if (state.oneNumber === '' && sign === '-') {
        btnChangeSign.onclick();
        return;
    }
    if (state.mathematicSign === '/' && state.twoNumber === '0') {
        showDivisionByZeroError();
        playSound(audioError)
        return
    }
    if (state.oneNumber !== '' && state.mathematicSign !== '' && state.twoNumber !== '') {
        let result = eval(state.oneNumber + ' ' + state.mathematicSign + ' ' + state.twoNumber);
        result = (Math.round(+result * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        if ((result.toString()).length <= MAX_DIGITS) {
            changeScreenText(result);
            state.oneNumber = result;
            state.twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
            playSound(audioError);

            return
        }
    }

    state.mathematicSign = sign;

    if (state.oneNumber === '') {
        state.mathematicSign = '';
    }
    else if (sign === 'x') {
        state.mathematicSign = '*';
    }
}