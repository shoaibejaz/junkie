import {
  MakeOrder,
  UploadFileAfterLogin,
  PaymentStatus
} from "../../Actions/Types";

const state = {
  uploadFileList: {
    _response: "",
    _duration: "",
    _fileUrl: "",
    _fileSize: "",
    _fileName: "",
    _totalCost: ""
  },
  makeOrderList: "",
  paymentStatusList: ""
};

function MakeOrderReducer(mState = { ...state }, action) {
  switch (action.type) {
    case UploadFileAfterLogin:
      console.log(action.payload);
      mState.uploadFileList = action.payload;
      return deepCopy(mState);

    case MakeOrder:
      mState.makeOrderList = action.payload;
      return deepCopy(mState);

    case PaymentStatus:
      mState.paymentStatusList = action.payload;
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
