import { UserLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";
import { createBrotliCompress } from "zlib";

export const LoginAction = (LoginData, crtl) => dispatch => {
  const Data = JSON.stringify(LoginData);
  console.log(Data);
  axios
    .post(BaseURL + "/userLogin", Data)
    .then(res => {
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
      }
      dispatch({
        type: UserLogin,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      if (error.response) {
        crtl.setState({ loading: false });
      }
      // dispatch({
      //   type: UserLogin,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
