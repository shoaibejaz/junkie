import { TranscriptorsLogin } from "../../Actions/Types";
import { setTranscriptorID } from "../../../LocalStorage/TranscriptorIDLocalStorage";

const state = {
  transcriptorLoginID: "",
  loginError: "",
  error: false
};

function TranscriptorLoginReducer(mState = { ...state }, action) {
  switch (action.type) {
    case TranscriptorsLogin:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
        mState.error = true;
      } else {
        if (
          action.payload === "Invalid Password" ||
          action.payload === "Email does not Exit" ||
          action.payload === "Invalid login or password" ||
          action.payload === "Null Values are not allowed" ||
          action.payload === "Access Denied"
        ) {
          mState.loginError = action.payload;
          mState.error = true;
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
