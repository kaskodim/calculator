import { currentValue, ERROR } from '../constants.js';
import { allReset } from './allReset.js';

export function deleteErrorCurrentValue() {
    if (currentValue.textContent === ERROR) {
        currentValue.textContent = '';
        allReset();
    }
}