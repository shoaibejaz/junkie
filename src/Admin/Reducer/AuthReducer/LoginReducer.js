import { TranscriptorsLogin } from "../../Actions/Types";
import { setTranscriptorID } from "../../../LocalStorage/TranscriptorIDLocalStorage";

const state = {
  transcriptorLoginID: "",
  loginError: ""
};

function TranscriptorLoginReducer(mState = { ...state }, action) {
  switch (action.type) {
    case TranscriptorsLogin:
      if (action.payload === undefined || action.payload === null) {
        mState.error = true;
      } else {
        if (
          action.payload === "Email doesn't Exist" ||
          action.payload === "Invalid Password" ||
          action.payload === "Invalid login or password" ||
          action.payload === "Null Values are not allowed" ||
          action.payload === "Access Denied"
        ) {
          mState.loginError = action.payload;
        } else {
          mState.transcriptorLoginID = action.payload;
          setTranscriptorID(mState.transcriptorLoginID);
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
export default TranscriptorLoginReducer;
