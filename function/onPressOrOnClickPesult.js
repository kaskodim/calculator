function onPressOrOnClickPesult() {
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
    }
    else {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        result = (Math.round(+result * 1000) / 1000).toString();
        changeScreenText(result);
        oneNumber = result;
        mathematicSign = '';
        twoNumber = '';
    }
}