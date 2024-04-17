
function getButton(key) {
    if (key === 'Delete' || key === 'Escape') {
        return btnReset;
    }
    else if (key === 'Backspace') {
        return btnBack;
    }
    else if (key === '*') {
        return arrButtons.find((element) => element.textContent === 'x');
    }
    else if (key === 'Enter') {
        return btnResult;
    }
    return arrButtons.find((element) => element.textContent === key);
}