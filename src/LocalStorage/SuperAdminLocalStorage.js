import history from "../Router/history";

export const setSuperAdminID = Data => {
  localStorage.setItem("SuperAdminLoginData", JSON.stringify(Data));
  const SuperAdminID = JSON.parse(localStorage.getItem("SuperAdminLoginData"));
  if (
    SuperAdminID === null ||
    SuperAdminID === undefined ||
    SuperAdminID === "Invalid Entries"
  ) {
    console.log("Login In Process");
    // history.push("/Login");
  } else {
    history.push("/SADashboard");
  }
};

export const getSuperAdminID = () => {
  const SuperAdminID = JSON.parse(localStorage.getItem("SuperAdminLoginData"));
  return SuperAdminID;
};

export const logOutSuperAdmin = Data => {
  if (JSON.parse(localStorage.getItem(Data))) {
    localStorage.removeItem(Data);
    history.push("/SALogin");
  }
};
