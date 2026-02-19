function getValueFromInputAsNumber(id) {
    return Number(document.getElementById(id).value);
}

function getValueFromInputAsString(id) {
    return (document.getElementById(id).value);
}
function getBalance(){
    return Number(document.getElementById('account-balance').textContent)
}
function setBalance(amount) {
    document.getElementById('account-balance').textContent = `${amount}`
}

function showSection(idToShow) {
    const sections = ['Add-money', 'cashout', 'payment'];
    sections.forEach((id) => {
        document.getElementById(id).classList.add('hidden');
    })

    document.getElementById(idToShow).classList.remove('hidden')
}