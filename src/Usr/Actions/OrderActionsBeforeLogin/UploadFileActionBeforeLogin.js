import { uploadFileBeforeLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const uploadFileActionBeforelogin = (Data, file, crtl) => dispatch => {
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
      dispatch({
        type: uploadFileBeforeLogin,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loadingFile: false });
        crtl.setState({ FilePath: res.data._fileUrl });
        crtl.setState({ Duration: res.data._duration });
        crtl.setState({ FileName: res.data._fileName });
        crtl.setState({ FileSize: res.data._fileSize });
        crtl.setState({ TotalCost: res.data._totalCost });
        crtl.setState({ SecondDuration: res.data._secondsDuration });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: uploadFileBeforeLogin,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
