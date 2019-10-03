import { ResetPassword } from "../Types";
import { BaseURL } from "../BaseURL";
import history from "../../../Router/history";
import axios from "axios";

export const resetPasswordAction = (NewPassword, crtl) => dispatch => {
  const password = JSON.stringify(NewPassword);
  console.log(password);
  axios
    .post(BaseURL + "/resetUserPassword", password)
    .then(res => {
      dispatch({
        type: ResetPassword,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
        if (res.data === "Password Updated Successfuly") {
          history.push("/Login");
        }
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
