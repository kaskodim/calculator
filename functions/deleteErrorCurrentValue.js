function deleteErrorCurrentValue() {
    if (currentValue.textContent === ERROR) {
        currentValue.textContent = '';
        allReset();
    }
}