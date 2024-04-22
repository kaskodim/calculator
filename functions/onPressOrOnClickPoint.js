function onPressOrOnClickPoint() {
    deleteErrorCurrentValue();
    currentInfo.textContent = '';

    if (oneNumber !== '' && mathematicSign !== '' && twoNumber === '') {
        return
    }
    if (twoNumber === '') {
        oneNumber = addingPoint(oneNumber);
    }
    else {
        twoNumber = addingPoint(twoNumber);
    }
}