function onPressOrOnClickNumber(num) {
    deleteCurrentInfo();
    deleteErrorCurrentValue();

    if (oneNumber === '0') {
        oneNumber = '';
        currentValue.textContent = '';
    }
    if (twoNumber === '0') {
        twoNumber = '';
        currentValue.textContent = '';
    }
    if (resultValue !== '' && mathematicSign === '') {
        oneNumber = '';
        resultValue = '';
    }
    if (mathematicSign === '') {
        if (oneNumber.includes('.') && oneNumber.split('.')[1].length === 3) {
            currentInfo.textContent = 'только 3 цифры после запятой';
            return
        }
        if (oneNumber.split('.')[0].length === 12) {
            currentInfo.textContent = 'только 12 символов';
            return
        }

        oneNumber = oneNumber + num;
        oneNumber = (Math.round(+oneNumber * 1000) / 1000).toString();
        changeScreenText(oneNumber);
    }
    else {
        if (twoNumber.includes('.') && twoNumber.split('.')[1].length === 3) {
            currentInfo.textContent = 'только 3 цифры после запятой'
            return
        }
        if (twoNumber.split('.')[0].length === 12 && !twoNumber.includes('.')) {
            currentInfo.textContent = 'только 12 символов';
            return
        }

        twoNumber = twoNumber + num;
        twoNumber = (Math.round(+twoNumber * 1000) / 1000).toString();
        changeScreenText(twoNumber);
    }
}
