function onPressOrOnClickNumber(num) {
    if (oneNumber === '0') {
        oneNumber = '';
        input.textContent = '';
    }
    if (twoNumber === '0') {
        twoNumber = '';
        input.textContent = '';
    }
    if (mathematicSign === '' || oneNumber === '') {
        oneNumber = oneNumber + num;
        changeScreenText(oneNumber);
    }
    else {
        twoNumber = twoNumber + num;
        changeScreenText(twoNumber);
    }
}