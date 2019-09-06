import {
  DisplayUserProfile,
  DisplayAllOrders,
  DisplayRequestedOrders,
  DisplayConfirmedOrders,
  DisplayDeliveredOrders
} from "../../Actions/Types";

const state = {
  displayUserProfileList: [],
  allUserOrdersList: [],
  requestedUserOrdersList: [],
  confirmedUserOrdersList: [],
  deliveredUserOrdersList: []
};

function UserDashboardReducer(mState = { ...state }, action) {
  switch (action.type) {
    case DisplayUserProfile:
      mState.displayUserProfileList = action.payload;
      return deepCopy(mState);

    case DisplayAllOrders:
      // mState.displayUserProfileList = action.payload;
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.allUserOrdersList = action.payload;
      }
      return deepCopy(mState);

    case DisplayRequestedOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.requestedUserOrdersList = action.payload;
      }
      return deepCopy(mState);

    case DisplayConfirmedOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.confirmedUserOrdersList = action.payload;
      }
      return deepCopy(mState);

    case DisplayDeliveredOrders:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.deliveredUserOrdersList = action.payload;
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
