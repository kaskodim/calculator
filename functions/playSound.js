function playSound(sound) {
    if (soundCheckbox.checked) {
        sound.currentTime = 0;
        sound.play();
    }
}