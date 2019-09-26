import { DisplayConfirmedOrders } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayConfirmedOrdersAction = (UserID, crtl) => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userConfirmedOrders", ID)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: DisplayConfirmedOrders,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ cLoading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: DisplayConfirmedOrders,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
