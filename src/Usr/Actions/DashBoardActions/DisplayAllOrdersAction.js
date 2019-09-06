import { DisplayAllOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayAllOrdersAction = UserID => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayAllOrders,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayAllOrders,
        payload: error.response
      });
      console.log(error.response);
    });
};
