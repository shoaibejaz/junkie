import { ChnageTranscriptorPassword } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const resetTranscriptorPasswordAction = (
  newPassword,
  crtl
) => dispatch => {
  const password = JSON.stringify(newPassword);
  console.log(password);
  axios
    .post(BaseURL + "/resetAdminPassword", password)
    .then(res => {
      if (res.data) {
        crtl.setState({ loadingPassword: false });
      }
      dispatch({
        type: ChnageTranscriptorPassword,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: ChnageTranscriptorPassword,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
