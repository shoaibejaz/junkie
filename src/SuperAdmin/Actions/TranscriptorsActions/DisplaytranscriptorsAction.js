import { DisplayTranscriptors } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const DisplayTranscriptorsAction = () => dispatch => {
  axios
    .get(BaseURL + "/allAdmins")
    .then(res => {
      dispatch({
        type: DisplayTranscriptors,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayTranscriptors,
        payload: error.response
      });
      console.log(error.response);
    });
};
