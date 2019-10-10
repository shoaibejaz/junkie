import { DisplayAllOrdersPool } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayAllOrdersAction = () => dispatch => {
  axios
    .get(BaseURL + "/allUsersRequestedOrders")
    .then(res => {
      dispatch({
        type: DisplayAllOrdersPool,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      console.log(error.response);
    });
};
