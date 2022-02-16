
//  function er moddome case increase and decrease kortechi

function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = parseInt(caseInput.value);
    if (isIncreasing == true) {
        caseNumber = caseNumber + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

    // call the calculate function
    calculateTotal();
}
// handle case increase event 
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value);
    // caseInput.value = caseNumber + 1;
    updateCaseNumber(true);
})

// handle case increase event 
document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value);

    updateCaseNumber(false);
})








//  function er moddome phone increase and decrease kortechi
function updatePhoneNumber(decreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = parseInt(phoneInput.value);
    if (decreasing == true) {
        phoneNumber = phoneNumber + 1;
    }
    else if (phoneNumber > 0) {
        phoneNumber = phoneNumber - 1;
    }
    phoneInput.value = phoneNumber;
    // update phone total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;


    // call the calculate function
    calculateTotal();
}
// handle phone increase event 
document.getElementById('phone-plus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    // phoneInput.value = phoneNumber + 1;
    updatePhoneNumber(true);
})

// handle phone decrease event 
document.getElementById('phone-minus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    // phoneInput.value = phoneNumber - 1;
    updatePhoneNumber(false);
})

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// update calculate function
function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const TotalPrice = subTotal + tax;
    // update on HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = TotalPrice;

}































