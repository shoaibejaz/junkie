import { PaymentStatus } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const paymentStatusAction = Code => dispatch => {
  const code = JSON.stringify(Code);
  console.log(code);
  axios
    .post(BaseURL + "/paymentStatus", code)
    .then(res => {
      dispatch({
        type: PaymentStatus,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: PaymentStatus,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
