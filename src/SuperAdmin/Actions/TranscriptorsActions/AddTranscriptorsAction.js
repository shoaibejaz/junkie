import { AddTranscriptors } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const AddTranscriptorsAction = (
  TranscriptorsLoginInfo,
  crtl
) => dispatch => {
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
      if (res.data === "Transcriptor Added Successfully") {
        crtl.setState({ loading: false });
        crtl.setState({ _TranscriptorName: "" });
        crtl.setState({ _Email: "" });
        crtl.setState({ _Password: "" });
      } else if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: AddTranscriptors,
      //   payload: error.response
      // });
      console.log(error.response.data);
    });
};
