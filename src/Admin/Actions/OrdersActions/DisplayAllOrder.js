import { DisplayAllOrdersPool } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayAllOrdersAction = () => dispatch => {
  axios
    .get(BaseURL + "/allUsersRequestedOrders")
    .then(res => {
      // debugger;
      // console.log("RESPOSE displayAllOrderActions");
      // console.log(res.data);
      dispatch({
        type: DisplayAllOrdersPool,
        payload: res.data
      });
    })
    .catch(error => {
      // dispatch({
      //   type: DisplayAllOrdersPool,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
