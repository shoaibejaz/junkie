import { SALogin } from "../../Actions/Types";
import { setSuperAdminID } from "../../../LocalStorage/SuperAdminLocalStorage";

const state = {
  superAdminLoginID: "",
  loginError: "",
};

function SuperAdminLoginReducer(mState = { ...state }, action) {
  switch (action.type) {
    case SALogin:
      if (action.payload === undefined || action.payload === null) {
      } else {
        if (
          action.payload === "Invalid login or password" ||
          action.payload === "Incorrect Email" ||
          action.payload === "Null Values are not allowed" ||
          action.payload === "Wrong Password"
        ) {
          mState.loginError = action.payload;
        } else {
          mState.superAdminLoginID = action.payload;
          setSuperAdminID(mState.superAdminLoginID);
        }
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
export default SuperAdminLoginReducer;
