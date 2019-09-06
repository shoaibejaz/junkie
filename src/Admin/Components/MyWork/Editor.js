import React, { Component } from "react";
import CKEditor from "ckeditor4-react";
import { uploadEditorDocumentAction } from "../../Actions/OrdersActions/UploadEditorDocument";
import UploadDocumentClass from "../../BusinessLogics/ActionLogics/OrderLogics/UploadDocumentClass";
import { connect } from "react-redux";
// import ReactHtmlParser from "react-html-parser";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
// import htmlToText from "html-to-text";

class Editor extends Component {
  state = {
    _Content: "",
    _ContentForDocs: ""
  };
  // componentDidMount() {
  //   if (this.props.document === "added successfully") {
  //     this.props.downloadDocumentAction();
  //   }
  // }
  render() {
    console.log(this.props.downloadDocumentList);
    const htmlFile = this.props.DocumentData.text;
    // const ParsedFile = ReactHtmlParser(this.props.document.text);
    const htmlFileWithStartingTags =
      "<!DOCTYPE html>" +
      " <html>" +
      " <body>" +
      htmlFile +
      " </body>" +
      "</html>";
    // const parsedValue = ReactHtmlParser(htmlFile);

    return (
      <div class="container">
        <h1>Start Transcription</h1>
        <div class="row">
          <div class="col-lg-12">
            <CKEditor
              onChange={e => this.setState({ _Content: e.editor.getData() })}
              data=""
            />
          </div>
          {/* <span>{htmlFile}</span> */}
          <button
            class="btn btn-primary"
            // style={{ float: "right" }}
            onClick={() => {
              this.props.uploadEditorDocumentAction(
                new UploadDocumentClass(this.state._Content)
              );
            }}
            // style={{ marginTop: "-100px" }}
          >
            Save
          </button>
          {htmlFile ? (
            <button
              class="btn btn-success"
              onClick={() => {
                if (htmlFile) {
                  // console.log("Calling it.........");
                  // console.log(htmlFileWithStartingTags);
                  const converted = htmlDocx.asBlob(htmlFileWithStartingTags, {
                    orientation: "landscape"
                  });
                  // this.setState({ _ContentForDocs: converted });
                  saveAs(converted, "TranscriptedFile.docx");
                }
              }}
              // style={{ float: "left" }}
            >
              Export as .doc
            </button>
          ) : (
            ""
          )}
          {/* <button
          class="btn btn-success"
          onClick={() => {
            if (htmlFile) {
              // console.log("Calling it.........");
              // console.log(htmlFileWithStartingTags);
              const text = htmlToText.fromString(ParsedFile, {
                wordwrap: 130
              });
              // this.setState({ _ContentForDocs: converted });
              saveAs(text, "test.txt");
            }
          }}
          style={{ marginTop: "-100px", marginLeft: "10px" }}
        >
          Export as .txt
        </button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  DocumentData: state.OrdersReducer.documentData
  // downloadDocument: state.UploadDocumentReducer.downloadDocumentList
});

export default connect(
  mapStateToProps,
  {
    uploadEditorDocumentAction
    //  downloadDocumentAction
  }
)(Editor);
