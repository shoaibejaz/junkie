import { ChangeTranscriptorsStatus } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const changeTranscriptorStatusAction = Status => dispatch => {
  const status = JSON.stringify(Status);
  console.log(status);
  axios
    .post(BaseURL + "/changeAdminStatus", status)
    .then(res => {
      dispatch({
        type: ChangeTranscriptorsStatus,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: ChangeTranscriptorsStatus,
        payload: error.response
      });
      console.log(error.response);
    });
};
