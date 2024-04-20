function onPressOrOnClickSingn(sign) {
    deleteCurrentInfo();
    deleteErrorCurrentValue();

    if (oneNumber === '' && sign === '-') {
        btnChangeSign.onclick();
        return;
    }
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
        return
    }
    if (oneNumber !== '' && mathematicSign !== '' && twoNumber !== '') {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        result = (Math.round(+result * 1000) / 1000).toString();
        if ((result.toString()).length <= 12) {
            changeScreenText(result);
            oneNumber = result;
            twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
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