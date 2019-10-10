import { UploadDelivery } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const uploadDeliveryAction = (Data, File, crtl) => dispatch => {
  console.log(Data);
  console.log(File[0]);
  const data = JSON.stringify(Data);
  const formdata = new FormData();
  formdata.append("file", File[0]);
  formdata.append("data", data);
  axios
    .post(BaseURL + "/adminCompletesOrder", formdata)
    .then(res => {
      dispatch({
        type: UploadDelivery,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loading: false });
        if (res.data === "Order is delivered") {
          window.location.reload();
        }
      }
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: UploadDelivery,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
