export function validateEmail(email) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return 'Enter a valid email address!';
  } else return null;
}

export function validatePassword(password) {
  if (
    !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
      password
    )
  ) {
    return 'Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long';
  } else return null;
}
