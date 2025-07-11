function generatePassword(length,  inculdeLowercase, includeUppercase, includeNumber, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += inculdeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0) {
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0) {
        return `Password must include at least one of the following: upper case, lower case,
        or symbol.`
        }

        for(let i = 0; i< length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

    return password;
}


function handleGenerate() {
    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("result").textContent = password;

}


