export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    if(name !== undefined){
        const isValidName = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(name) && name.length >= 3 && name.length <= 32;
        if(!isValidName) return "Name is invalid (Please ensure your name is between 3 and 32 characters in length)";
    }

    if(!isEmailValid) return "Email ID is invalid";
    if(!isPasswordValid) return "Password is invalid (Your password must include at least one lowercase letter, one uppercase letter, one digit, and one special character, and be a minimum of 8 characters in length)";
    

    return null;
}

/* The password regex checks for
At least one lowercase letter.
At least one uppercase letter.
At least one digit.At least one special character (@$!%*?&)
A minimum length of 8 characters */