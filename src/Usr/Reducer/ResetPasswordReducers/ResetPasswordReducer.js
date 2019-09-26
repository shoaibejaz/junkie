import { SendEmail, SendCode, ResetPassword } from "../../Actions/Types";
import VerifyCodeResponce from "../../BusinessLogics/ReducerLogics/ResetPasswordlogics/VerifyCodeResponce";

const state = {
  sendEmailList: "",
  sendCodeList: ["Not Found"],
  resetPasswordList: ""
};

function ResetPasswordReducer(mState = { ...state }, action) {
  switch (action.type) {
    case SendEmail:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.sendEmailList = action.payload;
      }
      return deepCopy(mState);

    case SendCode:
      if (action.payload === undefined || action.payload === null) {
      } else {
        // console.log(action.payload);
        // mState.sendCodeList.push(
        //   new VerifyCodeResponce(action.payload._email, action.payload._code)
        // );
        mState.sendCodeList = action.payload;
      }
      return deepCopy(mState);

    case ResetPassword:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.resetPasswordList = action.payload;
      }
      return deepCopy(mState);

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default ResetPasswordReducer;
