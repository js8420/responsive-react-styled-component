const ValidateForm = ({ name, email, password, confirmPassword }) => {
  // const namePattern = new RegExp("/^[A-Za-z0-9]$/");

  const namePattern = /^[A-Za-z0-9]{6,16}$/;
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!name.trim()) {
    return "Username required";
  }

  if (!namePattern.test(name.trim())) {
    return "Enter a valid name";
  }

  if (!email) {
    return "Email required";
  }

  if (emailPattern.test(email.toLocalLowerCase)) {
    return "Email address is invalid";
  }

  if (!password) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password needs to be 6 characters or more";
  }

  if (!confirmPassword) {
    return "Confirm password is required";
  }

  if (confirmPassword !== password) {
    return "Password and confirm password do not match";
  }

  return null;
};
export default ValidateForm;
