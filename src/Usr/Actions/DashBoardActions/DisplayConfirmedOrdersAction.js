import { DisplayConfirmedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayConfirmedOrdersAction = UserID => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userConfirmedOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayConfirmedOrders,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayConfirmedOrders,
        payload: error.response
      });
      console.log(error.response);
    });
};
