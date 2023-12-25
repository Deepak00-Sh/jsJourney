const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessageSection = formControl.querySelector('small');
    errorMessageSection.innerText = message;

}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isValidEmail(userEmail) {
    const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    const isValid = filter.test(String(userEmail).toLowerCase());
    if(!isValid){
        showError(userEmail, `${getFieldName(userEmail)} is not valid!`);
    }else{
        showSuccess(userEmail);
    }
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr){
    inputArr.forEach(element => {
        if(element.value.trim() === ''){
            showError(element, `${getFieldName(element)} is required`)
        }else{
            showSuccess(element);
        }
    });

}
function checkLength(input, minLength , maxLength){
    if(input.value.length < minLength){
        showError(input, `${getFieldName(input)} must not be less than ${minLength} characters.`)
    }else if(input.value.length > maxLength){
        showError(input, `${getFieldName(input)} must not be greater than ${maxLength} characters.`)        
    }
}

function checkPasswordMatch(password1, password2){
    if(password2.value.length == 0){
        showError(password2, `${getFieldName(password2)} cannot be empty!`);
    }
    else if(password1.value === password2.value){
        showSuccess(password2);
    }else{
        showError(password2,`${getFieldName(password2)} must match with the ${getFieldName(password1)}`);
    }
}

// Event listeners for real-time validation
username.addEventListener('input', function () {
    checkLength(username, 3, 15);
});

email.addEventListener('input', function () {
    isValidEmail(email);
});

password.addEventListener('input', function () {
    checkLength(password, 6, 25);
});

password2.addEventListener('input', function () {
    checkPasswordMatch(password, password2);
});

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    checkRequired([username,password,email,password2]);
    isValidEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password,password2);
});