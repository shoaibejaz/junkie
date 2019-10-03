import { DisplayUserProfile } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayUserProfileAction = UserID => dispatch => {
  const ID = JSON.stringify(UserID);
  axios
    .post(BaseURL + "/userProfile", ID)
    .then(res => {
      dispatch({
        type: DisplayUserProfile,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
