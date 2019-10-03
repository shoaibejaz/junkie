class ResetPasswordClass {
  constructor(Code, NewPassword, ConfirmPassword, Email) {
    this._code = Code;
    this._password = NewPassword;
    this._password1 = ConfirmPassword;
    this._email = Email;
  }
}
export default ResetPasswordClass;
