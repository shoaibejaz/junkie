import { MakeOrder } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const makeOrderAction = (OrderData, crtl) => dispatch => {
  const data = JSON.stringify(OrderData);
  axios
    .post(BaseURL + "/orderLoginPerson", data)
    .then(res => {
      if (res.data) {
        crtl.setState({ loadingOrder: false });
      }
      dispatch({
        type: MakeOrder,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
