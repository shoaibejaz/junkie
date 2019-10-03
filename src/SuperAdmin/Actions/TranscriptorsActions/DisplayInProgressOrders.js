import { DisplayInProgressOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayInProgressOrders = TID => dispatch => {
  const ID = JSON.stringify(TID);
  console.log(ID);
  axios
    .post(BaseURL + "/adminInProgressOrder", ID)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: DisplayInProgressOrders,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
      // dispatch({
      //   type: DisplayInProgressOrders,
      //   payload: error.response
      // });
    });
};
