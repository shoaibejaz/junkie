import { SALogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const superAdminLoginAction = LoginData => dispatch => {
  const Data = JSON.stringify(LoginData);
  console.log(Data);
  // console.log(BaseURL + "/superAdminLogin");
  axios
    .post(BaseURL + "/superAdminLogin", Data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SALogin,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: SALogin,
        payloadError: error.response
      });
      console.log(error.response);
    });
};
