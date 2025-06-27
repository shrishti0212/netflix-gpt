export const checkValidateData = (email, password,name) =>{

    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = name
    ? /^[A-ZÀ-ÿ][a-zÀ-ÿ'’\-]+(\s[A-ZÀ-ÿ][a-zÀ-ÿ'’\-]+)*$/.test(name.trim()) &&
      name.trim().length >= 2 &&
      name.trim().length <= 50
    : true;

    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not valid. It must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a digit.";
    if(!isNameValid) return "Name is not valid. Please ensure it starts with a capital letter and contains only letters, spaces, or hyphens.";
    return null;
};