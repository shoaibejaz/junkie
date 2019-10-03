import { DisplayConfirmedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayConfirmedOrdersAction = (UserID, crtl) => dispatch => {
  const ID = JSON.stringify(UserID);
  axios
    .post(BaseURL + "/userConfirmedOrders", ID)
    .then(res => {
      dispatch({
        type: DisplayConfirmedOrders,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ cLoading: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
