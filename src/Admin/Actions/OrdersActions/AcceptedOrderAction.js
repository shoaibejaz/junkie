import { TranscriptorAcceptOrder, DisplayAcceptedOrder } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const transcriptorAcceptedOrderAction = (Data, feedback) => dispatch => {
  const data = JSON.stringify(Data);
  console.log(data);
  axios
    .post(BaseURL + "/adminAcceptOrder", data)
    .then(res => {
      dispatch({
        type: TranscriptorAcceptOrder,
        payload: res.data
      });
      if (res.data === "You have pending works") {
        feedback.addNotification(res.data);
      }
    })
    .catch(error => {
      dispatch({
        type: TranscriptorAcceptOrder,
        payload: error.response
      });
      console.log(error.response);
    });
};

export const displayAcceptedOrderAction = Data => dispatch => {
  const data = JSON.stringify(Data);
  console.log(data);
  axios
    .post(BaseURL + "/adminAcceptedOrders", data)
    .then(res => {
      dispatch({
        type: DisplayAcceptedOrder,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: DisplayAcceptedOrder,
        payload: error.response
      });
      console.log(error.response);
    });
};
