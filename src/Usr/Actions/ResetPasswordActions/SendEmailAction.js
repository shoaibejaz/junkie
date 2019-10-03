import { SendEmail } from "../Types";
import { BaseURL } from "../BaseURL";
import history from "../../../Router/history";
import axios from "axios";

export const sendEmailAction = (Email, crtl) => dispatch => {
  const email = JSON.stringify(Email);
  axios
    .post(BaseURL + "/userRestSendMail", email)
    .then(res => {
      dispatch({
        type: SendEmail,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loading: false });
        if (res.data === "Email sent with Code to Verify") {
          history.push("/VerifyCode");
        } else {
          history.push("/Email");
        }
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
