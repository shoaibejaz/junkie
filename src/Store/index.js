import { combineReducers } from "redux";
//////////////////////////// Super Admin Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import SuperAdminLoginReducer from "../SuperAdmin/Reducer/AuthReducer/LoginReducer";
import TranscriptorsReducer from "../SuperAdmin/Reducer/TranscriptorsReducers/TranscriptorsReducer";
import DisplayContactUsInfoReducer from "../SuperAdmin/Reducer/ContactInfoReducers/DisplayContactUsInfoReducer";
/////////////////////////// User Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import SignUpReducer from "../Usr/Reducer/AuthReducer/SignUpReducer";
import UserLoginReducer from "../Usr/Reducer/AuthReducer/LoginReducer";
import MakeOrderReducer from "../Usr/Reducer/OrderReducer/OrderReducer";
import UserDashboardReducer from "../Usr/Reducer/DashBoardReducers/UserDashboardReducer";
////////////////////////// Transcription Side Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\
import TranscriptorLoginReducer from "../Admin/Reducer/AuthReducer/LoginReducer";
import OrdersReducer from "../Admin/Reducer/OrdersReducers/OrderReducer";

const rootReducer = combineReducers({
  //////////////////////////// Super Admin Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  SuperAdminLoginReducer,
  TranscriptorsReducer,
  DisplayContactUsInfoReducer,
  /////////////////////////// User Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  SignUpReducer,
  UserLoginReducer,
  MakeOrderReducer,
  UserDashboardReducer,
  ////////////////////////// Transcription Side Reducers \\\\\\\\\\\\\\\\\\\\\\\\\\
  TranscriptorLoginReducer,
  OrdersReducer
});

export default rootReducer;
