import { UploadFileAfterLogin } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

// export const uploadFileAction = (File,) => dispatch => {
//   console.log(File);
//   const fd = new FormData();
//   fd.append("File", File[0]);
//   console.log(fd);
//   axios
//     .post(BaseURL + "/upTest", fd)
//     .then(res => {
//       console.log(res.data);
//       dispatch({
//         type: UploadFile,
//         payload: res.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: UploadFile,
//         payload: error.response
//       });
//       console.log(error.response);
//     });
// };

export const uploadFileAction = (Data, file, crtl) => dispatch => {
  console.log(Data);
  console.log(file[0]);
  const data = JSON.stringify(Data);
  const formdata = new FormData();
  formdata.append("file", file[0]);
  formdata.append("data", data);
  axios
    .post(BaseURL + "/upTest", formdata)
    .then(res => {
      console.log(res.data);
      // crtl.setState({ Duration: "" });
      // crtl.setState({ File: testarray });
      dispatch({
        type: UploadFileAfterLogin,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: UploadFileAfterLogin,
        payload: error.response
      });
      console.log(error.response);
      crtl.setState({ Duration: "" });
    });
};
