function onPressOrOnClickSingn(sign) {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    if (oneNumber === '' && sign === '-') {
        btnChangeSign.onclick();
        return;
    }
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
        playSound(audioError)
        return
    }
    if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        result = (Math.round(+result * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        if ((result.toString()).length <= MAX_DIGITS) {
            changeScreenText(result);
            oneNumber = result;
            twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
            playSound(audioError);

            return
        }
    }

    mathematicSign = sign;

    if (oneNumber === '') {
        mathematicSign = '';
    }
    else if (sign === 'x') {
        mathematicSign = '*';
    }
}