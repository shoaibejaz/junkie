import { TranscriptorsLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const transcriptorLoginAction = LoginData => dispatch => {
  const Data = JSON.stringify(LoginData);
  console.log(Data);
  axios
    .post(BaseURL + "/adminLogin", Data)
    .then(res => {
      dispatch({
        type: TranscriptorsLogin,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: TranscriptorsLogin,
        payload: error.response
      });
      console.log(error.response);
    });
};
