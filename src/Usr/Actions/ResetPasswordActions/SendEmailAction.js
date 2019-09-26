import { SendEmail } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const sendEmailAction = Email => dispatch => {
  const email = JSON.stringify(Email);
  console.log(email);
  axios
    .post(BaseURL + "/userRestSendMail", email)
    .then(res => {
      // if (res.data) {
      //   crtl.setState({ loading: false });
      // }
      dispatch({
        type: SendEmail,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: SendEmail,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
