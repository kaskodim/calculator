function showDivisionByZeroError() {
    allReset();
    currentValue.textContent = ERROR;
    currentValue.classList.add('error');
    currentInfo.textContent = DIVISION_BY_ZERO;
}