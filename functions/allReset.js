import { state, currentInfo } from '../constants.js';

export function allReset() {
    state.oneNumber = '';
    state.twoNumber = '';
    state.mathematicSign = '';
    state.resultValue = '';
    currentInfo.textContent = '';
}