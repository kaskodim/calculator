const input = document.getElementById('input');
/*получает кнопки по общему классу*/
const numberBtns = document.getElementsByClassName('numberButton');
/*коллекцию в массив */
const arrNumberBtns = Array.from(numberBtns);
const btnBack = document.getElementById('buttonBackspace');
const btnReset = document.getElementById('buttonReset');
const btnResult = document.getElementById('buttonResult');

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';

btnBack.onclick = () => {
    if (twoNumber === '') {
        input.value = input.value.slice(0, -1);
        oneNumber = input.value;
    }
    else {
        input.value = input.value.slice(0, -1);
        twoNumber = input.value;
    }
}

arrNumberBtns.forEach((btn) => {
    btn.onclick = () => {
        if (mathematicSign === '' || oneNumber === '') {
            oneNumber = oneNumber + btn.innerHTML;
            input.value = oneNumber;
        }
        else {
            twoNumber = twoNumber + btn.innerHTML;
            input.value = twoNumber;
        }
    }
})

document.getElementById('buttonPlus').onclick = () => {
    if (oneNumber === '') {
        mathematicSign = '';
    }
    else {
        mathematicSign = '+';
    }
    if (twoNumber !== '') {
        let sum = +oneNumber + +twoNumber;
        input.value = sum;
        oneNumber = sum;
        twoNumber = '';
        mathematicSign = '+';
    }
}

btnResult.onclick = () => {
    if (mathematicSign === '+') {
        let sum = +oneNumber + +twoNumber;
        input.value = sum;
        mathematicSign = '';
        twoNumber = '';
        oneNumber = '';
    }

    // todo дописать другие знаки
    else if (mathematicSign === '-') { }
}

btnReset.onclick = () => {
    input.value = '';
    oneNumber = '';
    twoNumber = '';
    mathematicSign = '';
}
