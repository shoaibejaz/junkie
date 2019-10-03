import { TranscriptorsLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const transcriptorLoginAction = (LoginData, crtl) => dispatch => {
  const Data = JSON.stringify(LoginData);
  axios
    .post(BaseURL + "/adminLogin", Data)
    .then(res => {
      dispatch({
        type: TranscriptorsLogin,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      console.log(error.response);
    });
};
