import { AddTranscriptors } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const AddTranscriptorsAction = TranscriptorsLoginInfo => dispatch => {
  const Data = JSON.stringify(TranscriptorsLoginInfo);
  console.log(Data);
  axios
    .post(BaseURL + "/addAdmin", Data)
    .then(res => {
      dispatch({
        type: AddTranscriptors,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: AddTranscriptors,
        payload: error.response
      });
      console.log(error.response.data);
    });
};
