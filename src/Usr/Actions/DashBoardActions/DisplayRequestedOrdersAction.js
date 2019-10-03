import { DisplayRequestedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayRequestedOrdersAction = (UserID, crtl) => dispatch => {
  const ID = JSON.stringify(UserID);
  axios
    .post(BaseURL + "/userRequestedOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayRequestedOrders,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ rLoading: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
