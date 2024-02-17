const pass = document.querySelector('#passW');
const passC = document.querySelector('#passWC');
const msg = document.querySelector('#message');

passC.addEventListener('focusout', verification)

function verification(){
    if (pass.value !== passC.value){
        pass = '';
        passC = '';
        pass.focus();
        msg.textContent = '';
        msg.textContent = 'Password are not equal. Try again';
    }
    else{
        msg.textContent = '';
        msg.textContent = '✓';
    }
}


const ratevalue = document.getElementById("rvalue");
const rate = document.querySelector("#rate");

// RANGE event listener
rate.addEventListener('change', displayRatingValue);
rate.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratevalue.innerHTML = 'Rate: '+ rate.value;
}