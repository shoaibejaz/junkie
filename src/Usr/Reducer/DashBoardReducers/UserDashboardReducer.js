import {
  DisplayUserProfile,
  DisplayAllOrders,
  DisplayRequestedOrders,
  DisplayConfirmedOrders,
  DisplayDeliveredOrders
} from "../../Actions/Types";

import OrderClass from "../../BusinessLogics/ReducerLogics/DashboardLogics/RequestedOrderClass";
import { element } from "prop-types";

const state = {
  displayUserProfileList: {
    id: "",
    email: "",
    fname: "",
    lname: "",
    password: ""
  },
  allUserOrdersList: [],
  requestedUserOrdersList: [],
  rOrderMessage: "",
  rOrderLength: "",
  confirmedUserOrdersList: [],
  cOrderMessage: "",
  cOrderLength: "",
  deliveredUserOrdersList: [],
  dOrderMessage: "",
  dOrderLength: ""
};

function UserDashboardReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayUserProfile:
      mState.displayUserProfileList = action.payload;
      return deepCopy(mState);

    case DisplayAllOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.allUserOrdersList = action.payload;
      }
      return deepCopy(mState);

    case DisplayRequestedOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        if (action.payload === "No Requested Order") {
          mState.rOrderMessage = action.payload;
        } else {
          mState.requestedUserOrdersList = action.payload;
          mState.rOrderLength = mState.requestedUserOrdersList.length;
        }
      }
      return deepCopy(mState);

    case DisplayConfirmedOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        if (action.payload === "No Order in Queue") {
          mState.cOrderMessage = action.payload;
        } else {
          mState.confirmedUserOrdersList = action.payload;
          mState.cOrderLength = mState.confirmedUserOrdersList.length;
        }
      }
      return deepCopy(mState);

    case DisplayDeliveredOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        if (action.payload === "No Delivered Order") {
          mState.dOrderMessage = action.payload;
        } else {
          mState.deliveredUserOrdersList = action.payload;
          mState.dOrderLength = mState.deliveredUserOrdersList.length;
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
export default UserDashboardReducer;
