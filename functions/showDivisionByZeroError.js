import { allReset } from './allReset.js';
import { currentValue, currentInfo, DIVISION_BY_ZERO, ERROR } from '../constants.js';

export function showDivisionByZeroError() {
    allReset();
    currentValue.textContent = ERROR;
    currentValue.classList.add('error');
    currentInfo.textContent = DIVISION_BY_ZERO;
}