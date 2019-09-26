import { TranscriptorCompleteOrder } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const transcriptorCompleteOrderAction = (TID, crtl) => dispatch => {
  const ID = JSON.stringify(TID);
  console.log(ID);
  axios
    .post(BaseURL + "/adminCompletedOrders", ID)
    .then(res => {
      dispatch({
        type: TranscriptorCompleteOrder,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(error => {
      // dispatch({
      //   type: TranscriptorCompleteOrder,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
