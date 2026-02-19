const bankAccountEl = document.getElementById('add-money-bank');
const addMoneyBtnEl = document.getElementById('add-money-btn');
const addMoneyAccountNumberEl = document.getElementById('add-money-bank-number');
const addMoneyAmountEl = document.getElementById('add-money-amount');
const addMoneyPinEl = document.getElementById('add-money-pin');

addMoneyBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    
    const bankAccount = bankAccountEl.value;
    console.log(bankAccount);
    
    if(bankAccount === 'Select bank') {
        alert('Please Select a Bank');
        return;
    }

    const addMoneyAccountNumber = addMoneyAccountNumberEl.value;
    if(addMoneyAccountNumber.length !== 11) {
        alert('Invalic Acc Number')
    } 

    const addMoneyAmount = addMoneyAmountEl.value;
    const newBalance = getBalance() + Number(addMoneyAmount);
    console.log(newBalance);

    const addMoneyPin = addMoneyPinEl.value;

    if(addMoneyPin === '1234') {
        alert('Add money successfully!');
        setBalance(newBalance);
    } else {
        alert('Invalid Pin!');
        return;
    }

})