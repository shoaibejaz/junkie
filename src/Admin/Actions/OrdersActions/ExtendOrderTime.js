import { ExtendDeliveryTime } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const extentDeliveryTime = (OrderID, crtl) => dispatch => {
  const ID = JSON.stringify(OrderID);
  console.log(ID);
  axios
    .post(BaseURL + "/extendDelieveryTime", ID)
    .then(res => {
      dispatch({
        type: ExtendDeliveryTime,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      dispatch({
        type: ExtendDeliveryTime,
        payload: error.response
      });
      console.log(error.response);
    });
};
