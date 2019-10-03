import {
  AddTranscriptors,
  DisplayTranscriptors,
  ChangeTranscriptorsStatus,
  ChnageTranscriptorPassword,
  DisplayCompletedOrders,
  DisplayInProgressOrders
} from "../../Actions/Types";

import CompletedOrderClass from "../../BusinessLogics/ReducerLogics/CompletedOrdersClass";
import InProgressOrdersClass from "../../BusinessLogics/ReducerLogics/InProgressOrdersClass";
import TranscriptorInfoClass from "../../BusinessLogics/ReducerLogics/TranscriptorsInfoClass";

const state = {
  addTranscriptorsMessage: "",
  displayTranscriptorsList: [],
  transcriptorsListLength: "",
  chnageTranscriptorPasswordMessage: "",
  displayCompletedOrdersList: [],
  completeOrderLength: "",
  displayInProgressOrdersList: []
};

function TranscriptorsReducer(mState = { ...state }, action) {
  switch (action.type) {
    case AddTranscriptors:
      console.log(action.payload);
      if (action.payload === undefined || action.payload === null) {
      } else {
        // mState.displayTranscriptorsList = action.payload;
        // if (action.payload === "Transcriptor Added Successfully") {
        mState.addTranscriptorsMessage = action.payload;
        // }
      }
      return deepCopy(mState);

    case DisplayTranscriptors:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.transcriptorsListLength = action.payload.length;
        action.payload.forEach(element => {
          mState.displayTranscriptorsList.push(
            new TranscriptorInfoClass(element)
          );
        });
      }
      return deepCopy(mState);

    case ChnageTranscriptorPassword:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.chnageTranscriptorPasswordMessage = action.payload;
      }
      return deepCopy(mState);

    case ChangeTranscriptorsStatus:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.displayTranscriptorsList.filter(ls =>
          ls.id === action.payload ? (ls.status = !ls.status) : ""
        );
      }
      return deepCopy(mState);

    case DisplayCompletedOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.displayCompletedOrdersList = [];
        // action.payload.forEach(element => {
        //   mState.displayCompletedOrdersList.push(
        //     new CompletedOrderClass(element)
        //   );
        // });
        mState.displayCompletedOrdersList = action.payload;
        // mState.completeOrderLength = mState.displayCompletedOrdersList.length;
        // mState.displayCompletedOrdersList = action.payload;
      }
      return deepCopy(mState);

    case DisplayInProgressOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.displayInProgressOrdersList = [];
        mState.displayInProgressOrdersList.push(action.payload);
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
export default TranscriptorsReducer;
