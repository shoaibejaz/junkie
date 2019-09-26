import { OrderLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const orderLogin = (Data, crtl) => dispatch => {
  const data = JSON.stringify(Data);
  console.log(data);
  axios
    .post(BaseURL + "/loginAfterOrder", data)
    .then(res => {
      if (res.data) {
        crtl.setState({ loading: false });
      }
      dispatch({
        type: OrderLogin,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: orderLogin,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
