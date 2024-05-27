import { playToggle } from './functions/playToggle.js';
import { onPressOrOnClickReset } from './functions/onPressOrOnClickReset.js';
import { onPressOrOnClickBack } from './functions/onPressOrOnClickBack.js';
import { onPressOrOnClickChangeSign } from './functions/onPressOrOnClickChangeSign.js';
import { onPressOrOnClickNumber } from './functions/onPressOrOnClickNumber.js';
import { onPressOrOnClickSingn } from './functions/onPressOrOnClickSingn.js';
import { onPressOrOnClickPoint } from './functions/onPressOrOnClickPoint.js';
import { onPressOrOnClickPesult } from './functions/onPressOrOnClickPesult.js';
import { pressOrClick } from './functions/pressOrClick.js';
import {
    root,
    soundCheckbox,
    CHECK_SOUND,
    btnReset,
    btnBack,
    btnChangeSign,
    arrNumberBtns,
    arrBtnSigns,
    btnPoint,
    btnResult,
    NUMBERS,
    SINGS,
} from './constants.js';

root.focus();
root.addEventListener('click', () => {
    root.focus();
})

switch (JSON.parse(localStorage.getItem(CHECK_SOUND))) {
    case true:
        soundCheckbox.checked = true;
        break;
    case false:
        soundCheckbox.checked = false;
        break;
    default:
        localStorage.setItem(CHECK_SOUND, JSON.stringify(soundCheckbox.checked));
}
soundCheckbox.onclick = () => {
    localStorage.setItem(CHECK_SOUND, JSON.stringify(soundCheckbox.checked));
    playToggle();
}

btnReset.onclick = onPressOrOnClickReset;
btnBack.onclick = onPressOrOnClickBack;
btnChangeSign.onclick = onPressOrOnClickChangeSign;
arrNumberBtns.forEach((numBtn) => {
    numBtn.onclick = onPressOrOnClickNumber.bind(null, numBtn.innerHTML);
})
arrBtnSigns.forEach((signBtn) => {
    signBtn.onclick = onPressOrOnClickSingn.bind(null, signBtn.textContent);
})
btnPoint.onclick = onPressOrOnClickPoint;
btnResult.onclick = onPressOrOnClickPesult;

root.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        onPressOrOnClickBack();
    }
    if (event.repeat) return;
    if (event.key === 'Delete' || event.key === 'Escape') {
        onPressOrOnClickReset();
    }
    if (NUMBERS.includes(event.key)) {
        onPressOrOnClickNumber(event.key);
    }
    if (SINGS.includes(event.key)) {
        onPressOrOnClickSingn(event.key);
    }
    if (event.key === '.' || event.key === ',') {
        onPressOrOnClickPoint();
    }
    if (event.key === 'Enter') {
        onPressOrOnClickPesult();
    }
})

root.addEventListener('keydown', pressOrClick);
root.addEventListener('keyup', pressOrClick);
root.addEventListener('mousedown', pressOrClick);
root.addEventListener('mouseup', pressOrClick);
