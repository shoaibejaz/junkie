import { AddContactUsInfo } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const ContactInfoAction = (ContactInfoData, feedback) => dispatch => {
  const Data = JSON.stringify(ContactInfoData);
  console.log(Data);
  axios
    .post(BaseURL + "/addconactFrom", Data)
    .then(res => {
      feedback.addNotification();
      dispatch({
        type: AddContactUsInfo,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: AddContactUsInfo,
        payload: error.response
      });
      console.log(error.response.data);
    });
};
