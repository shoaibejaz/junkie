import { AddContactUsInfo } from "../../Actions/Types";

const state = {
  contactUsMessage: ""
};

function ContactUsReducer(mState = { ...state }, action) {
  switch (action.type) {
    case AddContactUsInfo:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.contactUsMessage = action.payload;
        return deepCopy(mState);
      }

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default ContactUsReducer;
