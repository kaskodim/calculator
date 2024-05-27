function onPressOrOnClickPesult() {
    currentInfo.textContent = '';

    if (oneNumber === '' || mathematicSign === '' || twoNumber === '') {
        return
    }
    if (mathematicSign === '/' && twoNumber === '0') {
        showDivisionByZeroError();
        playSound(audioError);
    }
    else {
        let result = eval(oneNumber + ' ' + mathematicSign + ' ' + twoNumber);
        result = (Math.round(+result * ROUND_AFTER_THE_POINT) / ROUND_AFTER_THE_POINT).toString();
        if ((result.toString()).length <= MAX_DIGITS) {
            changeScreenText(result);
            oneNumber = result;
            resultValue = result;
            mathematicSign = '';
            twoNumber = '';
        }
        else {
            currentInfo.textContent = ERROR_INFO;
            changeScreenText(ERROR);
            playSound(audioError);
        }
    }
}

