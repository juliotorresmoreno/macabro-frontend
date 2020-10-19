
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

function generatePassword(
    upper: boolean,
    lower: boolean,
    number: boolean,
    symbol: boolean,
    length: number
) {
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    const typesArr = [
        { upper },
        { lower },
        { number },
        { symbol }
    ].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }
    const typesArrFn = (type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(typesArrFn);
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}

export function generate_password(length: number) {
    return generatePassword(true, true, true, false, length);
}
