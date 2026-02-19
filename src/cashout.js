const agentNumberEl = document.getElementById('agent-number');
const cashoutAmountEl = document.getElementById('cashout-amount');
const cashoutPinEl = document.getElementById('cashout-pin');
const accountBalanceEl = document.getElementById('account-balance');
const cashoutFormEl = document.getElementById('cashout-form');

const cashoutBtnEl = document.getElementById('cashout-btn');

cashoutBtnEl.addEventListener('click', function(event){
    event.preventDefault();

    const agentNumber = agentNumberEl.value;
    if(agentNumber.length !== 11) {
        alert('Invalid Number!');
        return;
    }

    const cashoutAmount = Number(cashoutAmountEl.value);
    const currentBalance = Number(accountBalanceEl.textContent);
    const newBalance = currentBalance - cashoutAmount;



    const cashoutPinNumber = cashoutPinEl.value;
    if(cashoutPinNumber === '1234') {
        if(currentBalance < cashoutAmount) {
            alert('Insufficient Balance!')
            return;
        }

        alert('Withdraw succeed');
        accountBalanceEl.textContent = `${newBalance}`
        cashoutFormEl.reset();
    } else {
        alert('Invalid Pin Number!')
        return;
    }
})