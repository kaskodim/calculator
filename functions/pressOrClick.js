function pressOrClick(event) {
    const buttonUp = arrButtons.find((btn) => btn.classList.contains('btnActive'));

    if ((event.type === 'mouseup' || event.type === 'keyup') && buttonUp !== undefined) {
        buttonUp.classList.remove('btnActive');
        playSound(audioPressUp);
        return
    }

    const buttonDown = getButton(event.key) || arrButtons.find((btn) => btn === event.target);

    if (buttonDown === undefined) {
        return
    }

    if (event.type === 'mousedown' || event.type === 'keydown') {
        if (event.repeat) {
            return
        }
        buttonDown.classList.add('btnActive');
        playSound(audioPressDown);
    }
}
