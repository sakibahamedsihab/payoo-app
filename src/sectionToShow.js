const NavAddMoneyBtnEl = document.getElementById('nav-add-money-btn');
const NavCashoutBtnEl = document.getElementById('nav-cashout-btn');

NavAddMoneyBtnEl.addEventListener('click', function(){
    showSection('Add-money')
})

NavCashoutBtnEl.addEventListener('click', () => {
    showSection('cashout')
})
