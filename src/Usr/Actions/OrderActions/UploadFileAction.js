import { UploadFileAfterLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const uploadFileAction = (Data, file, crtl) => dispatch => {
  console.log(file[0]);
  const data = JSON.stringify(Data);
  console.log(data);
  const formdata = new FormData();
  formdata.append("file", file[0]);
  formdata.append("data", data);
  // console.log(formdata);
  axios
    .post(BaseURL + "/uploadvideo", formdata)
    .then(res => {
      console.log(res.data);
      // crtl.setState({ Duration: "" });
      // crtl.setState({ File: testarray });
      if (res.data) {
        crtl.setState({ loadingFile: false });
      }
      dispatch({
        type: UploadFileAfterLogin,
        payload: res.data
      });
    })
    .catch(error => {
      // dispatch({
      //   type: UploadFileAfterLogin,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
