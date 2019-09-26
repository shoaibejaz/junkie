import { DisplayCompletedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayCompletedOrdersAction = TID => dispatch => {
  const ID = JSON.stringify(TID);
  console.log(ID);
  axios
    .post(BaseURL + "/adminCompletedOrders", ID)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: DisplayCompletedOrders,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
      // dispatch({
      //   type: DisplayCompletedOrders,
      //   payload: error.response
      // });
    });
};
