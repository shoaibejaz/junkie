import { DisplayContactUsInfo } from "../../Actions/Types";

const state = {
  displayContactUsInfoList: []
};

function DisplayContactUsInfoReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayContactUsInfo:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.displayContactUsInfoList = action.payload;
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
