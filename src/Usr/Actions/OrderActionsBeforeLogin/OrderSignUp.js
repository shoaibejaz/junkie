import axios from "axios";
import { BaseURL } from "../BaseURL";
import { OrderSignup } from "../Types";

export const orderSignupAction = (Data, crtl) => dispatch => {
  const data = JSON.stringify(Data);
  console.log(data);
  axios
    .post(BaseURL + "/registerUserOrder", data)
    .then(res => {
      dispatch({
        type: OrderSignup,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loadingSubmit: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: OrderSignup,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
