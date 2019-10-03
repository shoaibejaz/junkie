import { DisplayDeliveredOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayDeliveredOrdersAction = (UserID, crtl) => dispatch => {
  const ID = JSON.stringify(UserID);
  axios
    .post(BaseURL + "/userDeliveredOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayDeliveredOrders,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ dLoading: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
