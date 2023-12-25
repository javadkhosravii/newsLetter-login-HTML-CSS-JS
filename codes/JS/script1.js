function validateEmail(event) {
    event.preventDefault(); 

    let emailInput = document.getElementById('inputValue');
    let email = emailInput.value;

    if (isValidEmail(email)) {
        window.location.href = './index2.html';
    } else {
        alert('please enter a valid email address');
    }
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}