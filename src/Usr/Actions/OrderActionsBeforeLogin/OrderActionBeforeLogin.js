import { MakeOrderBeforeLogin } from "../Types";

export const makeOrderActionBeforeLogin = (OrderData, crtl) => dispatch => {
  const data = JSON.stringify(OrderData);
  if (data) {
    crtl.setState({ firstNextButton: false });
  }
  dispatch({
    type: MakeOrderBeforeLogin,
    payload: data
  });
};
