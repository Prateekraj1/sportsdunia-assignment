export const requiredMessage = () => `This field is required`;

export const minLengthMessage = (length) => `Please enter at least ${length} characters`;

export const maxLengthMessage = (length) => `Please enter no more than ${length} characters`;

export const validateEmail = (email) => {
    const emailSplit = email.split("@");
    let isEmailValid = false;

    if (typeof emailSplit[1] !== "undefined" && emailSplit[1] === "internshala.com") {
        isEmailValid = true;
    } else {
        const username = typeof emailSplit[0] !== "undefined" ? emailSplit[0] : "";
        if (username.indexOf("+") > -1) {
            isEmailValid = false;
        } else {
            isEmailValid = true;
        }
    }

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (emailRegex.test(email) && isEmailValid) || "Please enter a valid email address";
};