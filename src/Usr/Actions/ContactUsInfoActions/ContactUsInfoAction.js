import { AddContactUsInfo } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const ContactInfoAction = (ContactInfoData, crtl) => dispatch => {
  const Data = JSON.stringify(ContactInfoData);
  console.log(Data);
  axios
    .post(BaseURL + "/addconactFrom", Data)
    .then(res => {
      dispatch({
        type: AddContactUsInfo,
        payload: res.data
      });
      console.log(res.data);
      if (res.data === "Your Request Received") {
        crtl.setState({ loading: false });
        crtl.setState({ _Fname: "" });
        crtl.setState({ _Lname: "" });
        crtl.setState({ _Email: "" });
        crtl.setState({ _Description: "" });
      } else if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: AddContactUsInfo,
      //   payload: error.response
      // });
      console.log(error.response.data);
    });
};
