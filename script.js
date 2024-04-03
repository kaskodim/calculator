/*получает окно Input*/
const input = document.getElementById('input');
/*получает кнопки по общему классу*/
const numberBtns = document.getElementsByClassName('numberButton');
/*коллекцию в массив */
const arrNumberBtns = Array.from(numberBtns);
/*получает кнопку Backspace*/
const btnBack = document.getElementById('buttonBackspace');
/*получает кнопку reset*/
const btnReset = document.getElementById('buttonReset');

let oneNumber = '';
let twoNumber = '';
let mathematicSign = '';

/*удаляет последний символ по клику*/
btnBack.onclick = () => {
    input.value = input.value.slice(0, -1);
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

document.getElementById('buttonResult').onclick = () => {
    if (mathematicSign === '+') {
        let sum = +oneNumber + +twoNumber;
        input.value = sum;
        mathematicSign = '';
        twoNumber = '';
        oneNumber = sum;
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
