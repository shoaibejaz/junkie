import { SignUp } from "../Types";
import axios from "axios";
import { BaseURL } from "../BaseURL";

export const SignUpAction = (SignUpData, crtl) => dispatch => {
  const Data = JSON.stringify(SignUpData);
  console.log(Data);
  // if (feedBack.state.formValidity === true) {
  axios
    .post(BaseURL + "/registerUser", Data)
    .then(res => {
      // const result = res.data;
      dispatch({
        type: SignUp,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
      }
      // feedBack.addNotification(result);
      // feedBack.setState({ formValidity: false });
    })
    .catch(error => {
      // dispatch({
      //   type: SignUp,
      //   payload: error.response
      // });
      console.log(error.response);
    });
  // feedBack.setState({ formValidity: false });
  // } else {
  //   feedBack.setState({ formValidity: false });
  //   feedBack.addNotification("Invalid data of fields");
  // }
};
