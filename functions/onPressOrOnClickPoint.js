import { deleteErrorCurrentValue } from './deleteErrorCurrentValue.js';
import { addingPoint } from './addingPoint.js';
import { currentInfo, state } from '../constants.js';

export function onPressOrOnClickPoint() {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    if (state.oneNumber !== '' && state.mathematicSign !== '' && state.twoNumber === '') {
        return
    }
    if (state.twoNumber === '') {
        state.oneNumber = addingPoint(state.oneNumber);
    }
    else {
        state.twoNumber = addingPoint(state.twoNumber);
    }
}