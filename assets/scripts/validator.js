function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}

function contactSubmit(event){
    event.preventDefault(); 
    if(!document.getElementById('name').value && !document.getElementById('email').value && !document.getElementById('message').value){
        alert("please enter the Details...");
    }else{
        alert("Thankyou for sending a message");
        location.reload(true);
    }
}




const emailError = document.getElementById('email-error');
function sendOtp() {
    const email= document.getElementById('email').value;
    if(!email){
        alert("Enter the email before continue");
    }
    else{
        if(isValidEmail(email)){
            emailError.style.display = 'none';
            alert("OTP sent to email!");
            document.getElementById('otp-section').classList.remove('hidden');
            document.getElementById('validate-otp-btn').classList.remove('hidden');
            document.getElementById('send-otp-btn').disabled = true;

        }
        else{
            const errorMsg = document.createElement('div');
            errorMsg.innerHTML = <p>Enter a valid email</p>;
            emailError.innerHTML =``;
            emailError.appendChild(errorMsg);
        }
    }
    
}



const otpError = document.getElementById('otp-error');
function validateOtp() {
    const otpInput = document.getElementById('otp').value;
    if (otpInput === "123456") {
        otpError.style.display  = 'none';
        alert('OTP validated!');
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('validate-otp-btn').disabled = true;
    } else {
        const errorMsg = document.createElement('div');
            errorMsg.innerHTML = <p>Enter a valid OTP</p>;
            otpError.innerHTML =``;
            otpError.appendChild(errorMsg);
    }
}

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const phone = document.getElementById('phone').value;
    console.log(phone);



    const numberError = document.getElementById('number-error');
    if(isValidPhoneNumber(phone)){
        numberError.style.display = 'none';
        if (!document.getElementById('accept-statements').checked) {
            alert('You must accept the company statements.');
            return false;
        }
    
        alert('Form submitted successfully!');
        document.getElementById('validation-form').classList.add('hidden');
        document.getElementById('social-container').classList.remove('hidden');
        return false;
    }
    else{
        const errorMsg = document.createElement('div');
            errorMsg.innerHTML = <p>Enter a valid phone number</p>;
            numberError.innerHTML =``;
            numberError.appendChild(errorMsg);
    }
    
}