import { UploadFileAfterLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const uploadFileAction = (Data, file, crtl) => dispatch => {
  const data = JSON.stringify(Data);
  const formdata = new FormData();
  formdata.append("file", file[0]);
  formdata.append("data", data);
  axios
    .post(BaseURL + "/uploadvideo", formdata)
    .then(res => {
      if (res.data) {
        crtl.setState({ loadingFile: false });
      }
      dispatch({
        type: UploadFileAfterLogin,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
