import { EditorDocument } from "../Types";
import { BaseURL } from "../BaseURL";
import axios from "axios";

export const uploadEditorDocumentAction = Data => dispatch => {
  //   const data = JSON.stringify(Data);
  console.log(Data);
  //   axios
  //     .post(BaseURL + "/postShaoib", data)
  //     .then(res => {
  dispatch({
    type: EditorDocument,
    payload: Data
  });
  //   console.log(res.data);
  // })
  // .catch(error => {
  //   dispatch({
  //     type: EditorDocument,
  //     payload: error.response
  //   });
  //   console.log(error.response);
  // });
};
