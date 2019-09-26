import { DisplayRequestedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayRequestedOrdersAction = (UserID, crtl) => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userRequestedOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayRequestedOrders,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ rLoading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: DisplayRequestedOrders,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
