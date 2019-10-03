import history from "../Router/history";
import { getOrder } from "./OrderLocalStorage";

export const setUserID = Data => {
  localStorage.setItem("UserLoginData", JSON.stringify(Data));
  const UserID = JSON.parse(localStorage.getItem("UserLoginData"));
  if (getOrder()._filePath === "") {
    history.push("/Dashboard");
  } else {
    history.push("/AddRequirment");
  }
};

export const getUserID = () => {
  const UserID = JSON.parse(localStorage.getItem("UserLoginData"));
  return UserID;
};

export const logOutUser = Data => {
  if (JSON.parse(localStorage.getItem(Data))) {
    localStorage.removeItem(Data);
    history.push("/");
  }
};
