import { deleteErrorCurrentValue } from './deleteErrorCurrentValue.js';
import { changeScreenText } from './changeScreenText.js';
import { state } from '../constants.js';

export function onPressOrOnClickChangeSign() {
    deleteErrorCurrentValue();

    if (state.oneNumber[0] === '-' && state.twoNumber === '') {
        state.oneNumber = state.oneNumber.slice(1);
        changeScreenText(state.oneNumber);
    }
    else if (state.oneNumber[0] !== '-' && state.twoNumber === '') {
        state.oneNumber = '-' + state.oneNumber;
        changeScreenText(state.oneNumber);
    }
    else if (state.twoNumber[0] === '-') {
        state.twoNumber = state.twoNumber.slice(1);
        changeScreenText(state.twoNumber);
    }
    else if (state.twoNumber[0] !== '-') {
        state.twoNumber = '-' + state.twoNumber;
        changeScreenText(state.twoNumber);
    }
}