import { OrderCheck } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const orderCheckAction = () => dispatch => {
  //   const ID = JSON.stringify(UserID);
  //   console.log(ID);
  axios
    .get(BaseURL + "/orderCheck")
    .then(res => {
      dispatch({
        type: OrderCheck,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: OrderCheck,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
