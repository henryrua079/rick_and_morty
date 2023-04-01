const validate = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};

    const isNum = (string) => {
        for (let i = 0; i < string.length; i++) {
            if (isNaN(string[i])) return false;
            else return true;
        }
    }

    
    if (!inputs.username.length) errors.username = 'Username vacio';
    else {
        if (!regexEmail.test(inputs.username)) errors.username = 'Debe ser un correo electrónico';
        else {
            errors.username = '';
        }
    }
    if (inputs.username.length > 35) errors.username = 'Escribe un nombre de usuario mas corto';

    if (inputs.password.length >= 6 && inputs.password.length <= 10) {
        if (isNum(inputs.password)) {
            errors.password = '';
        }
    }
    else {
        errors.password = "Password invalido";
    }
    return errors;
}


export default validate;