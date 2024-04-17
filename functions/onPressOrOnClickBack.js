function onPressOrOnClickBack() {
    if (input.textContent === DIVISION_BY_ZERO) {
        input.textContent = '';
        allReset();
    }
    if (twoNumber === '') {
        changeScreenText(input.textContent.slice(0, -1));
        oneNumber = input.textContent;
    }
    else {
        changeScreenText(input.textContent.slice(0, -1));
        twoNumber = input.textContent;
    }
}