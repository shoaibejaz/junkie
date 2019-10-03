import { SendCode } from "../Types";
import { BaseURL } from "../BaseURL";
import history from "../../../Router/history";
import axios from "axios";

export const sendCodeAction = (Code, _VerifyCode, crtl) => dispatch => {
  const code = JSON.stringify(Code);
  console.log(code);
  axios
    .post(BaseURL + "/userRestPassVerify", code)
    .then(res => {
      dispatch({
        type: SendCode,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
        if (res.data._code === _VerifyCode) {
          history.push("/ForgetPassword");
        } else {
          history.push("/VerifyCode");
        }
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
