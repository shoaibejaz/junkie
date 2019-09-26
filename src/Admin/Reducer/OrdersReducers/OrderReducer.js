import {
  DisplayAllOrdersPool,
  TranscriptorAcceptOrder,
  TranscriptorCompleteOrder,
  DisplayAcceptedOrder,
  EditorDocument,
  UploadDelivery
} from "../../Actions/Types";

import CompletedOrderClass from "../../BusinessLogics/ReducerLogics/CompletedOrdersClass";
import DisplayAcceptedOrderClass from "../../BusinessLogics/ReducerLogics/DisplayAcceptedOrderClass";
import DisplayAllOrdersPoolClass from "../../BusinessLogics/ReducerLogics/DisplayAllOrdersPoolClass";

const state = {
  displayAllOrdersPoolList: [],
  allOrdersLength: "",
  acceptOrderList: [],
  transcriptorAcceptedOrderList: [],
  displayAcceptedOrderList: {
    _orderId: "",
    _noOfSpeaker: "",
    _fileName: "",
    _trurnAroundTime: "",
    _timeStamp: "",
    _totalCost: "",
    _filePath: ""
  },
  acceptedOrderMessage: "",
  transcriptorCompleteOrderList: [],
  completedOrderlenght: "",
  uploadDeliveryMessage: "",
  documentData: ""
};

function OrdersReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayAllOrdersPool:
      if (action.payload === undefined || action.payload === null) {
      } else {
        action.payload.forEach(element => {
          mState.displayAllOrdersPoolList.push(
            new DisplayAllOrdersPoolClass(element)
          );
        });
        mState.allOrdersLength = mState.displayAllOrdersPoolList.length;
      }
      return deepCopy(mState);

    case TranscriptorAcceptOrder:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.acceptOrderList = action.payload;
        mState.displayAllOrdersPoolList = mState.displayAllOrdersPoolList.filter(
          ls => ls.orderid != action.payload._orderId
        );
      }
      return deepCopy(mState);

    case DisplayAcceptedOrder:
      // console.log("DisplayAcceptedOrder");
      if (action.payload === undefined) {
        // console.log("Undefine");
      } else if (action.payload === null) {
        mState.acceptedOrderMessage = "No Order To Display";
      } else {
        // mState.acceptedOrderLength = action.payload.length;
        mState.displayAcceptedOrderList = action.payload;
        // console.log(mState.acceptedOrderLength);
        // action.payload.forEach(element => {
        //   mState.displayAcceptedOrderList.push(
        //     new DisplayAcceptedOrderClass(element)
        //   );
        // });
      }
      return deepCopy(mState);

    case TranscriptorCompleteOrder:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.completedOrderlenght = action.payload.length;
        action.payload.forEach(element => {
          mState.transcriptorCompleteOrderList.push(
            new CompletedOrderClass(element)
          );
        });
      }
      return deepCopy(mState);

    case EditorDocument:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.documentData = action.payload;
      }
      return deepCopy(mState);

    case UploadDelivery:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.uploadDeliveryMessage = action.payload;
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
export default OrdersReducer;
