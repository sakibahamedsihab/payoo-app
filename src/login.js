const loginBtn = document.getElementById('login-btn');
const mobileNumberEl = document.getElementById('mobile');
const pinEl = document.getElementById('pin');

loginBtn.addEventListener('click', function(event){
    event.preventDefault()

    const mobileNumberInput = mobileNumberEl.value;
    const pinInput = pinEl.value;

    if(mobileNumberInput === '01234567890' && pinInput === '1234') {
        alert('Login Success')

        window.location.assign('./home.html')
    } else {
        alert('Invalid Number or Pin')
        return;
    }
    
})