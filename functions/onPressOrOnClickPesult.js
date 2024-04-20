function onPressOrOnClickPesult() {
    deleteCurrentInfo();

    if (oneNumber === '' || mathematicSign === '' || twoNumber === '') {
        return
    }
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
    }
    else {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        result = (Math.round(+result * 1000) / 1000).toString();
        if ((result.toString()).length <= 12) {
            changeScreenText(result);
            oneNumber = result;
            resultValue = result;
            mathematicSign = '';
            twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
            return
        }
    }
}