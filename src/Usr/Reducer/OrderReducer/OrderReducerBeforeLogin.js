import {
  MakeOrderBeforeLogin,
  uploadFileBeforeLogin,
  OrderLogin,
  OrderSignup,
  PaymentStatus
} from "../../Actions/Types";
import { setUserID } from "../../../LocalStorage/UserIDLocalStorage";
import { setOrder } from "../../../LocalStorage/OrderLocalStorage";

const state = {
  uploadFileList: {
    _response: "",
    _duration: "",
    _fileUrl: "",
    _fileSize: "",
    _fileName: "",
    _totalCost: ""
  },
  makeOrderList: { orderIdentifier: "" },
  orderLoginList: { paypalButton: "", userId: "" },
  orderSignUpList: "",
  orderSignUpMessage: "",
  paymentStatusList: ""
};

function MakeOrderReducerBeforeLogin(mState = { ...state }, action) {
  switch (action.type) {
    case uploadFileBeforeLogin:
      if (action.payload === undefined || action.payload === null) {
      } else {
        console.log(action.payload);
        mState.uploadFileList = action.payload;
      }
      return deepCopy(mState);

    case MakeOrderBeforeLogin:
      if (action.payload === undefined || action.payload === null) {
      } else {
        // console.log(action.payload);
        // mState.makeOrderList = action.payload;
        setOrder(deepCopy(action.payload));
      }
      return deepCopy(mState);

    case OrderLogin:
      if (action.payload === undefined || action.payload === null) {
      } else {
        console.log(action.payload);
        if (
          action.payload === "order not found" ||
          action.payload === "Invalid Password" ||
          action.payload === "Invalid Email"
        ) {
          mState.loginError = action.payload;
          mState.error = true;
        } else {
          mState.orderLoginList = action.payload;
          setUserID(deepCopy(mState.userLoginID));
        }
      }
      return deepCopy(mState);

    case OrderSignup:
      if (action.payload === undefined || action.payload === null) {
      } else {
        if (
          action.payload === "Email is not valid!" ||
          action.payload === "Email Already Exist" ||
          action.payload === "First Name must be 3 characters long!" ||
          action.payload === "Last Name must be 3 characters long!" ||
          action.payload === "Password must be 8 characters long!"
        ) {
          mState.orderSignUpMessage = action.payload;
        } else {
          console.log(action.payload);
          mState.orderSignUpList = action.payload.signUpUserId;
          setUserID(deepCopy(mState.orderSignUpList));
        }
      }
      return deepCopy(mState);

    case PaymentStatus:
      if (action.payload === undefined || action.payload === null) {
      } else {
        console.log(action.payload);
        mState.paymentStatusList = action.payload;
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
export default MakeOrderReducerBeforeLogin;
