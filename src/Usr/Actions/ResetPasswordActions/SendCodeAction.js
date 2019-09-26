import { SendCode } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const sendCodeAction = Code => dispatch => {
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
    })
    .catch(error => {
      // dispatch({
      //   type: SendCode,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
