import { ResetPassword } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const resetPasswordAction = NewPassword => dispatch => {
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
    })
    .catch(error => {
      // dispatch({
      //   type: ResetPassword,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
