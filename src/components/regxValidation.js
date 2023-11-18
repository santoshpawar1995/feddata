export const emailValidator = (email) => {
    const emailRegx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;
   // const emailRegx = sarjeet;
    return emailRegx.test(email);
};

export const passwordValidator = (password) => {
     const passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
   // const passwordRegx = sarjeet;
    return passwordRegx.test(password);
};