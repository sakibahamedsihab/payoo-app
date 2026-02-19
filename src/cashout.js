const cashoutBtnEl = document.getElementById('cashout-btn');

cashoutBtnEl.addEventListener('click', function(event){
    event.preventDefault();

    const agentNumber = getValueFromInputAsString('agent-number');
    if(agentNumber.length !== 11) {
        console.log(agentNumber)
        alert('Invalid Number!');
        return;
    }

    const cashoutAmount = getValueFromInputAsNumber('cashout-amount')
    const currentBalance = getBalance();
    const newBalance = currentBalance - cashoutAmount;



    const cashoutPinNumber = getValueFromInputAsNumber('cashout-pin');
    if(cashoutPinNumber === 1234) {
        if(currentBalance < cashoutAmount) {
            alert('Insufficient Balance!')
            return;
        }

        alert('Withdraw succeed');
        setBalance(newBalance)
        cashoutFormEl.reset();
    } else {
        console.log(cashoutPinNumber)
        console.log(typeof cashoutPinNumber)
        alert('Invalid Pin Number!')
        return;
    }
})