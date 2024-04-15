
function getButton(key) {
    if (key === 'Delete' || key === 'Escape') {
        return btnReset;
    }
    else if (key === 'Backspace') {
        return btnBack;
    }
    else if (key === '*') {
        return arrbuttons.find((element) => element.textContent === 'x');
    }
    else if (key === 'Enter') {
        return btnResult;
    }
    return arrbuttons.find((element) => element.textContent === key);
}