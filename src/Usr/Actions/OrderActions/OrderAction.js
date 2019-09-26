import { MakeOrder } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const makeOrderAction = (OrderData, crtl) => dispatch => {
  // console.log(File);
  const data = JSON.stringify(OrderData);
  console.log(data);
  // const formdata = new FormData();
  // formdata.append("file", File[0]);
  // formdata.append("data", data);
  // console.log(formdata);
  axios
    .post(BaseURL + "/orderLoginPerson", data)
    .then(res => {
      if (res.data) {
        crtl.setState({ loadingOrder: false });
      }
      dispatch({
        type: MakeOrder,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      // dispatch({
      //   type: MakeOrder,
      //   payload: error.response
      // });
      console.log(error.response);
    });
};
