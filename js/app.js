//======== Generate Pin Section ===========
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    //pin k number thake string banano hocce.
    const pinString = pin + '';
    if (pinString.length == 4) {
        // console.log(pin)
        return pin;
    }
    else {
        console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//===== calc part is here ========
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    //isNaN mane, she number cara onnon digit nibe na;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
//======= time to check pin code =======
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('pin-currect');
    const failMessage = document.getElementById('pin-wrong');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none'
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block'
    }
}