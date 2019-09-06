import { DisplayUserProfile } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const displayUserProfileAction = UserID => dispatch => {
  const ID = JSON.stringify(UserID);
  console.log(ID);
  axios
    .post(BaseURL + "/userProfile", ID)
    .then(res => {
      dispatch({
        type: DisplayUserProfile,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayUserProfile,
        payload: error.response
      });
      console.log(error.response);
    });
};
