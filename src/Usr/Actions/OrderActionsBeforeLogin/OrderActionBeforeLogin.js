import { MakeOrderBeforeLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";
import { createBrotliCompress } from "zlib";

export const makeOrderActionBeforeLogin = (OrderData, crtl) => dispatch => {
  const data = JSON.stringify(OrderData);
  console.log(data);
  // axios
  //   .post(BaseURL + "/nonLoginPlaceOrder", data)
  //   .then(res => {
  if (data) {
    crtl.setState({ firstNextButton: false });
  }
  dispatch({
    type: MakeOrderBeforeLogin,
    payload: data
  });
  //   console.log(res.data);
  // })
  // .catch(error => {
  //   // dispatch({
  //   //   type: MakeOrderBeforeLogin,
  //   //   payload: error.response
  //   // });
  //   console.log(error.response);
  // });
};
