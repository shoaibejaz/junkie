import history from "../Router/history";

export const setTranscriptorID = Data => {
  localStorage.setItem("TranscriptorLoginData", JSON.stringify(Data));
  const TranscriptorID = JSON.parse(
    localStorage.getItem("TranscriptorLoginData")
  );
  if (
    TranscriptorID === null ||
    TranscriptorID === undefined ||
    TranscriptorID === "Invalid Entries"
  ) {
    console.log("Login In Process");
    // history.push("/Login");
  } else {
    history.push("/TDashboard");
  }
};

export const getTranscriptorID = () => {
  const TranscriptorID = JSON.parse(
    localStorage.getItem("TranscriptorLoginData")
  );
  return TranscriptorID;
};

export const logOutTranscriptor = Data => {
  if (JSON.parse(localStorage.getItem(Data))) {
    localStorage.removeItem(Data);
    history.push("/TLogin");
  }
};
