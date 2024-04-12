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
        if (oneNumber.includes('.')) {
            if (oneNumber.split('.')[1].length === 3) {
                changeScreenText(oneNumber);
                return
            }
        }
        oneNumber = oneNumber + num;
        oneNumber = (Math.round(+oneNumber * 1000) / 1000).toString();
        changeScreenText(oneNumber);
    }
    else {
        if (twoNumber.includes('.')) {
            if (twoNumber.split('.')[1].length === 3) {
                changeScreenText(twoNumber);
                return
            }
        }
        twoNumber = twoNumber + num;
        twoNumber = (Math.round(+twoNumber * 1000) / 1000).toString();
        changeScreenText(twoNumber);
    }
}
