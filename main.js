

let input = document.getElementById("result");
let number = document.querySelectorAll("button");

function operator(val) {
    if (val === 'C')
        input.value = '';
    else if (val === '=')
        input.value = calculate(input.value);
    else
        input.value += val;
}

function calculate(inputValue) {
    console.log(inputValue)
    try {
        return new Function('return ' + inputValue)();
    }catch (error) {
        return 'Invalid input';
    }
}

number.forEach(button => {
    let buttonVal = button.innerText;
    button.addEventListener('click', function () { operator(buttonVal)})
});