import OrderClass from "./OrderClass";
const state = {
  OrderData: {},
  Order: {
    _filePath: "",
    _fileName: "",
    _turnAroundTime: "",
    _noOfSpeakers: "",
    _timeStamp: "",
    _verbitam: "",
    _totalCost: "",
    _fileDuration: "",
    _secondsDuration: ""
  }
};

export const setOrder = Data => {
  localStorage.setItem("OrderData", JSON.stringify(Data));
};

export const getOrder = () => {
  //   state.OrderData = JSON.parse(localStorage.getItem("OrderData"));
  if (localStorage.getItem("OrderData")) {
    state.OrderData = JSON.parse(localStorage.getItem("OrderData"));
    state.Order = JSON.parse(state.OrderData);
  }
  return state.Order;
};

export const deleteOrder = Data => {
  if (JSON.parse(localStorage.getItem(Data))) {
    localStorage.removeItem(Data);
  }
};
