function onPressOrOnClickSingn(sign) {
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
        changeScreenText(result);
        oneNumber = result;
        twoNumber = '';
    }

    mathematicSign = sign;

    if (oneNumber === '') {
        mathematicSign = '';
    }
    else if (sign === 'x') {
        mathematicSign = '*';
    }
}