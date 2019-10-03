import axios from "axios";
import { BaseURL } from "../BaseURL";
import { OrderSignup } from "../Types";

export const orderSignupAction = (Data, crtl) => dispatch => {
  const data = JSON.stringify(Data);
  axios
    .post(BaseURL + "/registerUserOrder", data)
    .then(res => {
      dispatch({
        type: OrderSignup,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loadingSubmit: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
