import { changeScreenText } from './changeScreenText.js';

export function addingPoint(variable) {
    if (variable.includes('.')) {
        return variable;
    }
    else if (variable === '') {
        return variable;
    }
    else {
        variable = variable + '.';
        changeScreenText(variable);
        return variable;
    }
}