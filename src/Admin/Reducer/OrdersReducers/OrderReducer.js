import {
  DisplayAllOrdersPool,
  TranscriptorAcceptOrder,
  TranscriptorCompleteOrder,
  DisplayAcceptedOrder,
  EditorDocument,
  UploadDelivery
} from "../../Actions/Types";

import CompletedOrderClass from "../../BusinessLogics/ReducerLogics/CompletedOrdersClass";

const state = {
  displayAllOrdersPoolList: [],
  acceptOrderList: [],
  transcriptorAcceptedOrderList: [],
  displayAcceptedOrderList: {},
  transcriptorCompleteOrderList: [],
  uploadDeliveryMessage: "",
  documentData: ""
};

function OrdersReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayAllOrdersPool:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.displayAllOrdersPoolList = action.payload;

        console.log(mState.displayAllOrdersPoolList);
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
      console.log("DisplayAcceptedOrder");
      if (action.payload === undefined || action.payload === null) {
      } else {
        console.log(action.payload);
        mState.displayAcceptedOrderList = action.payload;
      }
      return deepCopy(mState);

    case TranscriptorCompleteOrder:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.transcriptorCompleteOrderList = action.payload;
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
