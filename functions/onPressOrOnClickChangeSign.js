function onPressOrOnClickChangeSign() {
    if (oneNumber[0] === '-' && twoNumber === '') {
        oneNumber = oneNumber.slice(1);
        changeScreenText(oneNumber);
    }
    else if (oneNumber[0] !== '-' && twoNumber === '') {
        oneNumber = '-' + oneNumber;
        changeScreenText(oneNumber);
    }
    else if (twoNumber[0] === '-') {
        twoNumber = twoNumber.slice(1);
        changeScreenText(twoNumber);
    }
    else if (twoNumber[0] !== '-') {
        twoNumber = '-' + twoNumber;
        changeScreenText(twoNumber);
    }
}