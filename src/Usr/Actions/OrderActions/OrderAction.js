import { MakeOrder } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const makeOrderAction = (OrderData, File) => dispatch => {
  console.log(OrderData);
  console.log(File);
  const data = JSON.stringify(OrderData);
  const formdata = new FormData();
  formdata.append("file", File[0]);
  formdata.append("data", data);
  console.log(formdata);
  axios
    .post(BaseURL + "/addOrder", formdata)
    .then(res => {
      dispatch({
        type: MakeOrder,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: MakeOrder,
        payload: error.response
      });
      console.log(error.response);
    });
};
