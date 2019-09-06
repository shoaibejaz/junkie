import history from "../Router/history";

export const setUserID = Data => {
  localStorage.setItem("UserLoginData", JSON.stringify(Data));
  const UserID = JSON.parse(localStorage.getItem("UserLoginData"));
  if (UserID === null || UserID === undefined || UserID === "Invalid Entries") {
    console.log("Login In Process");
    // history.push("/Login");
  } else {
    history.push("/Dashboard");
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
