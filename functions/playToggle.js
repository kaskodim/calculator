function playToggle() {
    if (soundCheckbox.checked) {
        audioToggleOn.currentTime = 0;
        setTimeout(()=>{audioToggleOn.play()}, 100);
    }
    else {
        audioToggleOff.currentTime = 0.8;
        audioToggleOff.play();
    }
}