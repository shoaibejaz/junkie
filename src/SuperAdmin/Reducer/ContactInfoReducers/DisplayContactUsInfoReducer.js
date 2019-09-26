import { DisplayContactUsInfo } from "../../Actions/Types";

import ContactUsInfoClass from "../../BusinessLogics/ReducerLogics/ContactUsInfoClass";

const state = {
  displayContactUsInfoList: [],
  contactUsListLength: ""
};

function DisplayContactUsInfoReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayContactUsInfo:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.contactUsListLength = action.payload.length;
        action.payload.forEach(element => {
          mState.displayContactUsInfoList.push(new ContactUsInfoClass(element));
        });
      }
      mState.displayContactUsInfoList = action.payload;
      return deepCopy(mState);

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default DisplayContactUsInfoReducer;
