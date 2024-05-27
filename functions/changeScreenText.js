import { currentValue } from '../constants.js';

export function changeScreenText(screenText) {
    currentValue.classList.remove('error');
    currentValue.textContent = screenText;
}