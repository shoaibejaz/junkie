import { SignUp } from "../Types";
import axios from "axios";
import { BaseURL } from "../BaseURL";

export const SignUpAction = (SignUpData, crtl) => dispatch => {
  const Data = JSON.stringify(SignUpData);
  axios
    .post(BaseURL + "/registerUser", Data)
    .then(res => {
      dispatch({
        type: SignUp,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
