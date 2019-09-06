import { UserLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const LoginAction = LoginData => dispatch => {
  const Data = JSON.stringify(LoginData);
  console.log(Data);
  axios
    .post(BaseURL + "/userLogin", Data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: UserLogin,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: UserLogin,
        payload: error.response
      });
      console.log(error.response);
    });
};
