function onPressOrOnClickPesult () {
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
    }
    else {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        changeScreenText(result);
        oneNumber = result.toString();
        mathematicSign = '';
        twoNumber = '';
    }
}