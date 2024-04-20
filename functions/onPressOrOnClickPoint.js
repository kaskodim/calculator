function onPressOrOnClickPoint() {
    deleteCurrentInfo();
    deleteErrorCurrentValue();

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