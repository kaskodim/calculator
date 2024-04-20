function onPressOrOnClickBack() {
    deleteCurrentInfo();
    if (currentValue.textContent === DIVISION_BY_ZERO || currentValue.textContent === ERROR) {
        currentValue.textContent = '';
        allReset();
    }
    if (twoNumber === '') {
        changeScreenText(currentValue.textContent.slice(0, -1));
        oneNumber = currentValue.textContent;
    }
    else {
        changeScreenText(currentValue.textContent.slice(0, -1));
        twoNumber = currentValue.textContent;
    }
}