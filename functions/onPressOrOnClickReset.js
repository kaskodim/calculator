import { currentValue } from '../constants.js';
import { allReset } from './allReset.js';

export function onPressOrOnClickReset() {
    currentValue.textContent = '';
    allReset();
}