import { UserLogin } from "../../Actions/Types";
import { setUserID } from "../../../LocalStorage/UserIDLocalStorage";

const state = {
  userLoginID: "",
  loginError: "",
};

function UserLoginReducer(mState = deepCopy(state), action) {
  switch (action.type) {
    case UserLogin:
      if (action.payload === undefined || action.payload === null) {
        mState.error = true;
      } else {
        if (
          action.payload === "Invalid Email" ||
          action.payload === "Invalid Entries" ||
          action.payload === "Invalid Password"
        ) {
          mState.loginError = action.payload;
        } else {
          mState.userLoginID = action.payload;
          setUserID(deepCopy(mState.userLoginID));
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
export default UserLoginReducer;
