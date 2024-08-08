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





function sendOtp() {
    const email= document.getElementById('email').value;
    if(!email){
        alert("Enter the email before continue");
    }
    else{
        if(isValidEmail(email)){
            alert("OTP sent to email!");
            document.getElementById('otp-section').classList.remove('hidden');
            document.getElementById('send-otp-btn').disabled = true;
        }
        else{
            alert("Enter a valid email.")
        }
    }
    
}

function validateOtp() {
    const otpInput = document.getElementById('otp').value;
    if (otpInput === "123456") {
        alert('OTP validated!');
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('validate-otp-btn').disabled = true;
    } else {
        alert('Invalid OTP!');
    }
}

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const phone = document.getElementById('phone').value;
    console.log(phone);
    
    if(isValidPhoneNumber(phone)){
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
        alert('Enter a valid mobile number');
    }
    
}