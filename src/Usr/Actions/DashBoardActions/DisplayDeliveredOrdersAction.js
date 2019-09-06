import { DisplayDeliveredOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayDeliveredOrdersAction = UserID => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userDeliveredOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayDeliveredOrders,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayDeliveredOrders,
        payload: error.response
      });
      console.log(error.response);
    });
};
