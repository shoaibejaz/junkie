import { MakeOrder, UploadFileAfterLogin } from "../../Actions/Types";

const state = {
  makeOrderList: [],
  uploadFileList: []
};

function MakeOrderReducer(mState = { ...state }, action) {
  switch (action.type) {
    case MakeOrder:
      mState.makeOrderList = action.payload;
      return deepCopy(mState);

    case UploadFileAfterLogin:
      console.log(action.payload);
      mState.uploadFile = action.payload;
      return deepCopy(mState);

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default MakeOrderReducer;
