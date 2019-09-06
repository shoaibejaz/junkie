import { SignUp } from "../../Actions/Types";

const state = {
  signUpList: []
};

function SignUpReducer(mState = { ...state }, action) {
  switch (action.type) {
    case SignUp:
      mState.signUpList = action.payload;
      return deepCopy(mState);

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default SignUpReducer;
