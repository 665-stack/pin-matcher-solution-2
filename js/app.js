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