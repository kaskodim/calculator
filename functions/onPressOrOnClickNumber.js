function onPressOrOnClickNumber(num) {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    // не позволяет вводить несколько "0" перед числом
    if (oneNumber === '0') {
        oneNumber = '';
        currentValue.textContent = '';
    }
    if (twoNumber === '0') {
        twoNumber = '';
        currentValue.textContent = '';
    }

    //  если нажата кнопка "=" первое число набирает заново
    if (resultValue !== '' && mathematicSign === '') {
        oneNumber = '';
        resultValue = '';
    }

    // при отсутвующем знаке набирает первое число
    if (mathematicSign === '') {

        // ограничивает количество символов после запятой первого числа
        if (oneNumber.includes('.') && oneNumber.split('.')[1].length === NUMBER_AFTER_THE_POINT) {
            currentInfo.textContent = INFO_NUMBER_AFTER_THE_POINT;
            return
        }

        //  ограничивает количество символов первого целого числа
        if (oneNumber.split('.')[0].length === MAX_DIGITS) {
            currentInfo.textContent = INFO_NUMBER_OF_DIGITS;
            return
        }

        // набирает первое число
        oneNumber = `${oneNumber}${num}`;
        oneNumber = (Math.round(+oneNumber * 1000) / 1000).toString();
        changeScreenText(oneNumber);
    }

    // набирает второе число
    else {
        // ограничивает количество символов после запятой второго числа
        if (twoNumber.includes('.') && twoNumber.split('.')[1].length === NUMBER_AFTER_THE_POINT) {
            currentInfo.textContent = INFO_NUMBER_AFTER_THE_POINT;
            return
        }
        //  ограничивает количество символов второго целого числа
        if (twoNumber.split('.')[0].length === MAX_DIGITS && !twoNumber.includes('.')) {
            currentInfo.textContent = INFO_NUMBER_OF_DIGITS;
            return
        }

        // набирает второе число
        twoNumber = `${twoNumber}${num}`;
        twoNumber = (Math.round(+twoNumber * 1000) / 1000).toString();
        changeScreenText(twoNumber);
    }
}
