import { currentInfo, currentValue, state, DIVISION_BY_ZERO, ERROR } from '../constants.js';
import { allReset } from './allReset.js';
import { changeScreenText } from './changeScreenText.js';

export function onPressOrOnClickBack() {
    currentInfo.textContent = '';
    if (currentValue.textContent === DIVISION_BY_ZERO || currentValue.textContent === ERROR) {
        currentValue.textContent = '';
        allReset();
    }
    if (state.twoNumber === '') {
        changeScreenText(currentValue.textContent.slice(0, -1));
        state.oneNumber = currentValue.textContent;
    }
    else {
        changeScreenText(currentValue.textContent.slice(0, -1));
        state.twoNumber = currentValue.textContent;
    }
}