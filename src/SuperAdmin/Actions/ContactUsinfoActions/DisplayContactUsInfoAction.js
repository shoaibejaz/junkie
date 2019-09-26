import { DisplayContactUsInfo } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const DisplayContactUsInfoAction = crtl => dispatch => {
  axios
    .get(BaseURL + "/contcatFormRequests")
    .then(res => {
      dispatch({
        type: DisplayContactUsInfo,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: DisplayContactUsInfo,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
